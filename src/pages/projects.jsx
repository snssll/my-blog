import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

// 定义我做过的项目
const projects = [
  {
    name: 'My Blog',
    description:
      '基于 Next.js 的个人博客，也就是你现在看到的这个网站。欢迎 fork！',
    link: { href: 'https://github.com/snssll/my-blog', label: 'github.com' },
    logo: logoHelioStream,
  },
  {
    name: 'Next.js',
    description:
      '集成强大的基于 Rust 的 JavaScript 工具，扩展了最新的 React 功能。',
    link: { href: 'https://nextjs.org', label: 'nextjs.org' },
    logo: logoPlanetaria,
  },
  {
    name: 'Rust',
    description:
      '一种让每个人都能够构建可靠且高效软件的语言。',
    link: { href: 'https://www.rust-lang.org', label: 'rust-lang.org' },
    logo: logoAnimaginary,
  },
  {
    name: 'Quantumult X',
    description:
      'Quantumult X 是一个强大的网络工具，适用于需要自定义代理的网页开发者和用户。',
    link: { href: 'https://apps.apple.com/us/app/quantumult-x/id1443988620', label: 'apple.com' },
    logo: logoCosmos,
  },
  {
    name: 'Auto-GPT',
    description:
      '一个试验性的开源尝试，使GPT-4完全自主。',
    link: { href: 'https://github.com/Significant-Gravitas/Auto-GPT', label: 'github.com' },
    logo: logoOpenShuttle,
  },
]

// 定义连接图标
function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

// 主函数
export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Terry Cooper</title>
        <meta
          name="description"
          content="试图在宇宙中留下的痕迹"
        />
      </Head>
      <SimpleLayout
        title="试图在宇宙中留下的痕迹"
        intro="参与过的项目大大小小有许多，其中值得一提的仅占少数。以下的大部分项目都是开源的，假如你感兴趣可以方便地查阅相关代码；如果你有好的想法，也欢迎提交 pr 参与到项目中来。"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
