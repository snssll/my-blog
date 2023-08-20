import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Terry Cooper</title>
        <meta
          name="description"
          content="I'am Terry Cooper, 坐标西湖, 沉迷 React, 梦想 AI 解放全人类"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              I'am TCooper，来自西湖，<br />沉迷于 React 和 Rust，<br />梦想有一天 AI 可以解放全人类
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                我喜欢探索未知，讨厌机械性劳动。从我还是八岁的时候，我就开始对身边的事物产生强烈的好奇心。
              </p>
              <p>
                记得那时，家里有一只古老的闹钟，那种有齿轮和摆锤的机械式闹钟。
                每次它的指针滴答滴答地转动，我都会被吸引，想要知道其中的奥秘。
                于是有一天，当家里的大人不在家时，我小心翼翼地用螺丝刀将它拆开，
                试图解开它的秘密。
              </p>
              <p>
                当我看到那些精巧的齿轮、弹簧和摆锤时，我几乎忘了时间。
                虽然我不能完全理解其工作原理，但是能够亲手触摸到那些部件，让我感到无比兴奋。
                然而，当我试图将其重新组装时，我发现这比我预想的要复杂得多。
                最后，那只闹钟再也没有响起过。
              </p>
              <p>
                我以为我会因为这件事受到家长的责骂，但当我坦白告诉父母时，
                他们并没有生气，反而笑着说：“你的好奇心很值得鼓励，
                但下次在拆东西之前，先确保你知道怎么组装回去。”
              </p>
              <p>
                随着年岁的增长，我发现机械性的劳动并不适合我。
                无论是学校的作业还是家里的日常琐事，一成不变的重复总让我感到厌烦。
                我需要的是刺激和新鲜感，我想要探索更多的未知世界。
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                在 Twitter 上关注我
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                在 Instagram 上关注我
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                在 GitHub 上关注我
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                在 Weibo 上关注我
              </SocialLink>
              <SocialLink
                href="mailto:chulingyun@zjut.edu.cn"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                chulingyun@zjut.edu.cn
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
