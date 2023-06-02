export type BlogInfo = {
  id: string
  name: string
  description: string
  pages: {
    totalItems: number
  }
  posts: {
    totalItems: number
  }
}

export type BlogPost = {
  id: string
  title: string
  updated: string
  content: string
  images: {
    url: string
  }[]
}

export type BlogPosts = {
  nextPageToken: string
  items: BlogPost[]
}
