import { NextPage } from 'next'
import Head from 'next/head'
import Meta from 'components/Meta'
import BlogView from 'containers/Views/Blog'

const BlogPage: NextPage = () => (
  <>
    <Head>
      <Meta />
      <title>Maisha Roots | Blog</title>
    </Head>
    <BlogView />
  </>
)

export default BlogPage
