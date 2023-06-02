/* eslint-disable import/no-relative-parent-imports */
import React, { FC } from 'react'

import MainLayout from 'containers/Layouts/Main'
import { MainContent, Title } from '../styles'
import { Content, Arrowicon, UpdatedText } from './styles'
import useBlogPost from 'hooks/useBlogPost'
import { useRouter } from 'next/router'
import parse from 'html-react-parser'
import DOMPurify from 'isomorphic-dompurify'
import AppLink from 'components/AppLink'
import { urls } from 'globals/routes'
import { format } from 'date-fns'
import localeEs from 'date-fns/locale/es'

const BlogPostView: FC = () => {
  const {
    query: { id: idRaw },
  } = useRouter()
  const id = (idRaw as string) ?? ''
  const { post } = useBlogPost({ id })

  return (
    <MainLayout>
      <MainContent>
        <AppLink toPage={urls.blog}>
          <Arrowicon />
          Blog
        </AppLink>
        {!!post ? (
          <>
            <Title>{post.title}</Title>
            <UpdatedText>
              {format(new Date(post.updated), 'PPP', {
                locale: localeEs,
              })}
            </UpdatedText>
            {/* <ShareButtons url={post.id} /> */}

            <Content>{parse(DOMPurify.sanitize(post.content))}</Content>
          </>
        ) : (
          <p>loading...</p>
        )}
      </MainContent>
    </MainLayout>
  )
}

export default BlogPostView
