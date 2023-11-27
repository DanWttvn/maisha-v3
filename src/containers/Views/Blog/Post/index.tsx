/* eslint-disable import/no-relative-parent-imports */
import React, { FC } from 'react'

import MainLayout from 'containers/Layouts/Main'
import { MainContent, Title } from '../styles'
import { Content, Arrowicon, UpdatedText } from './styles'
import parse from 'html-react-parser'
import DOMPurify from 'isomorphic-dompurify'
import AppLink from 'components/AppLink'
import { urls } from 'globals/routes'
import { format } from 'date-fns'
import localeEs from 'date-fns/locale/es'
import Share from 'components/Share'
import Loader from 'components/Loader'
import Container from 'components/Container'
import { BlogPost } from 'models/blog'

const BlogPostView: FC<{ post: BlogPost }> = ({ post }) => (
  <MainLayout>
    <MainContent>
      <AppLink toPage={urls.blog}>
        <Arrowicon />
        Blog
      </AppLink>
      {!!post ? (
        <>
          <Title>{post.title}</Title>
          <Container
            styles={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <UpdatedText>
              {format(new Date(post.updated), 'PPP', {
                locale: localeEs,
              })}
            </UpdatedText>
            <Share url={urls.blogPost(post.id)} />
          </Container>

          <Content>{parse(DOMPurify.sanitize(post.content))}</Content>
        </>
      ) : (
        <Loader />
      )}
    </MainContent>
  </MainLayout>
)

export default BlogPostView
