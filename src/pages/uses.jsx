import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Terry Cooper</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="一些小玩意"
        intro="鼓捣一些`可能`提升生产力的小玩意儿并分享给大家是我的一大快乐源泉，此外还有一些我个人觉得非常有意思的东西。"
      >
        <div className="space-y-20">
          <ToolsSection title="实物">
            <Tool title="14” MacBook Pro, M1 Max, 64GB RAM (2021)">
              自从我转向 Mac 就再也没有听到过风扇转动的声音，一度以为他是没有风扇的，直到我通过软件手段打开它才确认了我的笔记本是有风扇的并且确实可以转。
            </Tool>
            <Tool title="Nintendo Switch Lite (2019)">
              虽然 switch 的芯片和屏幕是电子垃圾，但是它的游戏体验是无可替代的。Lite 体积小，长时间握持也不觉得累，塞尔达和斯普拉顿可以是我的最爱了。
            </Tool>
            <Tool title="PROGRESS HEALTH 双背椅">
              椅子是我捡来的，但是舒适度是真的，双背的支撑简直可以坐一天也不会觉得累。有一天靠背固定有点坏了，我看了看牌子去淘宝上搜发现价格也挺香，等这把彻底报废了我就去买把新的。
            </Tool>
          </ToolsSection>
          <ToolsSection title="开发工具">
            <Tool title="VIM (R.I.P Bram Moolenaar)">
              真的是年少不知 VIM 好，我刚接触 IDE 的时候用的就是 VsCode，当时特别鄙视 VIM，（都什么年代了还用 VIM） 现在的情况是我把键盘都改成了 VIM 模式。
            </Tool>
            <Tool title="OrbStack">
              是一个 Mac 端 Docker 管理的替代工具，同时具有虚拟机功能。据说开发者是一个还在上学的的朋友，Docker 官方的工具无论是体验、性能还有空间占用上完全没有优势。OrbStack 是最好的 Docker 工具！
            </Tool>
          </ToolsSection>
          <ToolsSection title="设计工具">
            <Tool title="Figma">
              我最初只是将 Figma 当做一个设计工具，现在已经完全成为了我的设计白板，我会专门有一个文档由于记录设计思路，据说它的协作表现也非常优秀。
            </Tool>
          </ToolsSection>
          <ToolsSection title="生产力工具">
            <Tool title="google Colab">
              一个免费的 Jupyter 笔记本环境，可以免费使用 GPU 和 TPU，我用它来训练机器学习模型，也可以用来写一些小程序。免除了配置环境和电脑发热的痛苦。
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
