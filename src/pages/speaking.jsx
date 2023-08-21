import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>杂谈 - Terry Cooper</title>
        <meta
          name="description"
          content="文字之外，我也有在许多地方进行知识的交流和分享"
        />
      </Head>
      <SimpleLayout
        title="文字之外"
        intro="除了文字我更喜欢的分享方式其实是面对面的交流，例如演讲、线下活动、博客等等，这些方式是交互性质的，相比于文字有着更大的带宽和沟通效果。"
      >
        <div className="space-y-20">
          <SpeakingSection title="现场">
            <Appearance
              href="#"
              title="在生活里东张西望"
              description="现在我已经成为了坐在大桌上用餐的大人，但我的记忆仍然停留在过去的小桌子上。"
              event="YIXI 2022"
              cta="去看"
            />
            <Appearance
              href="#"
              title="为真实的社会而设计"
              description="经过长时间的工作和大量设计实践，我发现真正让设计服务于社会和人们其实非常复杂。这不是设计师坐在电脑前一刹那就能想出来的，它需要设计师长期处于一个社会语境中，持续了解世界正在发生什么以及每个人背后的思考。"
              event="YIXI 2021"
              cta="去看"
            />
          </SpeakingSection>
          <SpeakingSection title="播客">
            <Appearance
              href="#"
              title="为什么建筑不能有感觉"
              description="我们通常看到的博物馆都是封闭的黑暗空间，一旦进入，就无法感知外面的风雨。但为什么建筑不能像人一样有感觉呢？下雨时，为何我们不能在这里听到蝉鸣和雨声呢？"
              event="ApplePark 2021"
              cta="去听"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
