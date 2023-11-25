/* eslint-disable no-console */
import { BlogInfo, BlogPosts } from 'models/blog'
import { useEffect, useState } from 'react'
import { getBlogInfo, getBlogPosts } from 'services/blog'

const useBlog = () => {
  const [blogInfo, setBlogInfo] = useState<BlogInfo>()
  const [posts, setPosts] = useState<BlogPosts['items']>()
  const [nextPageToken, setNextPageToken] =
    useState<BlogPosts['nextPageToken']>()

  const getInfo = async () => {
    try {
      const page = await getBlogInfo()
      setBlogInfo(page)
    } catch (error) {
      console.error(error)
    }
  }

  const getPosts = async () => {
    try {
      const res = await getBlogPosts({ pageToken: nextPageToken })
      setPosts(res.items)
      setNextPageToken(res?.nextPageToken)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    void getInfo()
    void getPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    blogInfo,
    posts,
  }
}

export default useBlog
