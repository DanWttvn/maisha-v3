/* eslint-disable no-console */
import { BlogPost } from 'models/blog'
import { useEffect, useState } from 'react'
import { getBlogPost } from 'services/blog'

const useBlogPost = ({ id }: { id: string }) => {
  const [post, setPost] = useState<BlogPost>()

  const get = async () => {
    try {
      const data = await getBlogPost({ id })
      console.log(data)
      setPost(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    void get()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    post,
  }
}

export default useBlogPost
