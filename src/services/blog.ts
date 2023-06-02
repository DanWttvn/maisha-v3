import { request } from 'helpers/http'
import { assertParam } from 'helpers/url'
import { BlogInfo, BlogPosts } from 'models/blog'

const baseUrl = `https://www.googleapis.com/blogger/v3/blogs/${
  process.env['BLOGGER_BLOG_ID'] || ''
}`
const authParams = `?key=${process.env['BLOGGER_API_KEY'] || ''}`

export const getBlogInfo = async (): Promise<BlogInfo> =>
  request<BlogInfo>(`${baseUrl}${authParams}`)

// https://developers.google.com/blogger/docs/3.0/reference/posts/list?hl=es-419
export const getBlogPosts = async ({
  pageToken,
}: {
  pageToken?: string
}): Promise<BlogPosts> =>
  request<BlogPosts>(
    `${baseUrl}/posts${authParams}&fetchImages=true&status=live
    ${assertParam('pageToken', pageToken)}`,
  )
