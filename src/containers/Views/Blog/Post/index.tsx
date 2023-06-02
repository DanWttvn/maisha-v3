import React, { FC } from 'react'

import MainLayout from 'containers/Layouts/Main'
import {
  PostPreview,
  ContentText,
  Content,
  Image,
  TextContainer,
} from './styles'
import Text from 'components/Text'
import useBlogPost from 'hooks/useBlogPost'
import { useRouter } from 'next/router'

const BlogPostView: FC = () => {
  const {
    query: { id: idRaw },
  } = useRouter()
  const id = (idRaw as string) ?? ''
  const { post } = useBlogPost({ id })

  return (
    <MainLayout>
      {!!post && (
        <Content>
          <Text tag="h1" weight="black" size="l">
            {post.title}
          </Text>

          <ContentText size="s" color="lightGrey">
            {post.content}
          </ContentText>

          {/* // TO-DO: functionality */}
          {/* <ShareButton>
                  <ShareIcon />
                  <Text tag="span" size="s">
                    Compartir
                  </Text>
                </ShareButton> */}
        </Content>
      )}
    </MainLayout>
  )
}

export default BlogPostView
