import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'

// 文章列表
function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>阅读全文</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

// 文章目录页主函数
export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>胡诌 - Terry Cooper</title>
        <meta
          name="description"
          content="这里会有我关于宇宙、生活、哲学、科技、技术的一些思考，主要目的是为了记录，也为了将来有一天可以用它们训练一个人工智能复制体。"
        />
      </Head>
      <SimpleLayout
        title="人文 · 科技 · 白日梦"
        intro="这里会有我关于宇宙、生活、哲学、科技、技术的一些思考，主要目的是为了记录，也为了将来有一天可以用它们训练一个 AI 复制体。"
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
