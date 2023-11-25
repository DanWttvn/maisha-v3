import { NextPage } from 'next'
import Head from 'next/head'
import Meta from 'components/Meta'
import BlogPostView from 'containers/Views/Blog/Post'

const BlogPostPage: NextPage = () => (
  <>
    <Head>
      <Meta />
      <title>Maisha Roots | Blog</title>
    </Head>
    <BlogPostView />
  </>
)

export default BlogPostPage
