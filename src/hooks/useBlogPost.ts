/* eslint-disable no-console */
import { BlogPost } from 'models/blog'
import { useEffect, useState } from 'react'
import { getBlogPost } from 'services/blog'

const useBlogPost = ({ id }: { id: string | undefined }) => {
  const [post, setPost] = useState<BlogPost>()

  const get = async (postId: string) => {
    try {
      const data = await getBlogPost({ id: postId })
      setPost(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (!id) return
    void get(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return {
    post,
  }
}

export default useBlogPost
