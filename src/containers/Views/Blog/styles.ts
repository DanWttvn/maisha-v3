import styled from 'styled-components'
import Paragraph from 'components/Paragraph'
import Container from 'components/Container'
import { Share } from '@styled-icons/material/Share'

export const Content = styled(Container).attrs({
  direction: 'vertical',
})`
  padding-block-start: 2.5rem;
  width: 100%;
  max-width: 670px;
  margin: 0 auto;
  gap: 32px;
`

export const PostPreview = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 250px;
  cursor: pointer;
`

export const Image = styled.img<{ $isFallback: boolean }>`
  width: 320px;
  object-fit: ${({ $isFallback }) => ($isFallback ? 'scale-down' : 'cover')};
  height: 100%;
`

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 24px 16px;
`

export const ContentText = styled(Paragraph)`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  width: 100%;
  margin-block-end: 0;
`

export const ShareButton = styled.button`
  display: flex;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  margin-inline-start: auto;
  align-items: center;
`

export const ShareIcon = styled(Share)`
  width: 1rem;
  color: 1px solid ${({ theme }) => theme.colors.black};
`
