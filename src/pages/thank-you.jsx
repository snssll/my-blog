import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>你订阅了 - Terry Cooper</title>
        <meta
          name="description"
          content="感谢你的订阅～"
        />
      </Head>
      <SimpleLayout
        title="感谢你的订阅～"
        intro="每次我有新的文章发布时，你都会收到一封邮件。随时可以取消，不要有任何压力。"
      />
    </>
  )
}
