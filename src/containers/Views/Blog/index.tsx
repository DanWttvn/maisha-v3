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
import useBlog from 'hooks/useBlog'

const BlogView: FC = () => {
  const { blogInfo, posts } = useBlog()

  function extractContent(html: string) {
    const contentString = new DOMParser().parseFromString(html, 'text/html')
      .documentElement.textContent
    return contentString?.slice(0, 250).trim()
  }

  return (
    <MainLayout>
      <Content>
        <Text tag="h1" weight="black" size="l">
          {blogInfo?.name}
        </Text>
        {/* TO-DO: first preview with vertical layout */}
        {!!posts &&
          posts.map(x => (
            <PostPreview key={x.id} onClick={() => console.log(x.id)}>
              <Image
                src={x?.images?.[0]?.url || './images/logo.png'}
                alt="Post main image"
                $isFallback={!x?.images?.[0]?.url}
              />

              <TextContainer>
                <Text weight="bold" size="m" styles={{ fontSize: '1.25rem' }}>
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
      </Content>
    </MainLayout>
  )
}

export default BlogView
