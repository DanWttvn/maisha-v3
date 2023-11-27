import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Meta from 'components/Meta'
import BlogPostView from 'containers/Views/Blog/Post'
import { getBlogPost } from 'services/blog'
import { BlogPost } from 'models/blog'

const BlogPostPage: NextPage<{ post: BlogPost }> = ({ post }) => (
  <>
    <Head>
      <Meta />
      <title>Maisha Roots | Blog</title>
    </Head>
    <BlogPostView post={post} />
  </>
)

export const getServerSideProps: GetServerSideProps = async context => {
  const postId = context.params?.['id'] as string
  const post = await getBlogPost({ id: postId })

  return {
    props: { post },
  }
}

export default BlogPostPage
