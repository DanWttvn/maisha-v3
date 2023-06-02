import React, { FC } from 'react'

import MainLayout from 'containers/Layouts/Main'
import {
  PostPreview,
  ContentText,
  MainContent,
  Image,
  Title,
  TextContainer,
} from './styles'
import Text from 'components/Text'
import useBlog from 'hooks/useBlog'
import { useRouter } from 'next/router'
import { urls } from 'globals/routes'

const BlogView: FC = () => {
  const { push } = useRouter()
  const { blogInfo, posts } = useBlog()

  function extractContent(html: string) {
    const contentString = new DOMParser().parseFromString(html, 'text/html')
      .documentElement.textContent
    return contentString?.slice(0, 250).trim()
  }

  return (
    <MainLayout>
      <MainContent>
        {!!posts ? (
          <>
            {/* TO-DO: first preview with vertical layout */}
            <Title>{blogInfo?.name}</Title>
            {posts.map(x => (
              <PostPreview
                key={x.id}
                onClick={() => void push(urls.blogPost(x.id))}>
                <Image
                  src={x?.images?.[0]?.url || './images/logo.png'}
                  alt="Post main image"
                  $isFallback={!x?.images?.[0]?.url}
                />

                <TextContainer>
                  <Text
                    weight="black"
                    size="m"
                    styles={{ fontSize: '1.25rem' }}>
                    {x.title}
                  </Text>
                  <ContentText size="s" color="lightGrey">
                    {extractContent(x.content)}
                  </ContentText>

                  {/* // TO-DO: functionality */}
                  {/* <ShareButton>
                  <ShareIcon />
                  <Text tag="span" size="s">
                    Compartir
                  </Text>
                </ShareButton> */}
                </TextContainer>
              </PostPreview>
            ))}
          </>
        ) : (
          <p>loading...</p>
        )}
      </MainContent>
    </MainLayout>
  )
}

export default BlogView
