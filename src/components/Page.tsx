import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

interface PageProps {
  children?: React.ReactNode
  title: string
  image?: any
}

function Page({ title, children, image }: PageProps) {
  return (
    <main>
      <article className="content">
        <header className="pb-16 pt-24">
          <div className="space-y-4">
            <h1 className="text-center text-5xl font-bold dark:text-gray-100">{title}</h1>
          </div>
        </header>

        {image && (
          <div className="hero-image">
            <div className="hero-w">
              <GatsbyImage image={image.childImageSharp.gatsbyImageData} objectFit="contain" alt="" />
            </div>
          </div>
        )}
        <section className="page-full-content">
          <div className="post-content">
            <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose lg:prose-lg mx-auto max-w-none">
                <div className="content-body">{children}</div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}

export default Page
