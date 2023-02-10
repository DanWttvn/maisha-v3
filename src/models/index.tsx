import { CSSProperties, PropsWithChildren } from 'react'
import { Color } from 'styles/themes'

export interface BaseProps extends PropsWithChildren {
  styles?: CSSProperties
  isHidden?: boolean
  isFullWidth?: boolean
  ref?: any
  className?: string
}

export interface InputProps {
  isError?: boolean
  isRequired?: boolean
}

export type SectionTitle = 'header' | 'about' | 'timeline' | 'how-work' | 'projects' | 'collaborate' | 'transparency'
export type SubSectionTitle =
  | 'know-us'
  | 'where'
  | 'context'
  | 'structure'
  | 'collaborators'
  | 'volunteering'
  | 'donate'
  | 'entities'
  | 'reports'
  | 'entities'
  | 'good-practices'

export interface SectionProps {
  id?: SectionTitle
}

export interface SubSectionProps {
  id?: SubSectionTitle
  isNarrow?: boolean
}

export interface TextProps extends BaseProps {
  onClick?: (x?: any) => void
  isHighlighted?: boolean
  isCentered?: boolean
  weight?: 'normal' | 'semibold' | 'bold' | 'black' | 'inherit'
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'inherit'
  color?: Color |'inherit'
}

export type FormDraft<T> = { [P in keyof Partial<T>]: T[P] }

export type Language = 'ES' | 'EN' | 'SW'

export type LanguageOptions = { ES: string; EN: string; SW: string }

export type Cookies = 'is_newsletter_closed' | 'is_policy_accepted'

export interface SectionData {
  id: SectionTitle
  title: LanguageOptions
  subsections?: {
    id: SubSectionTitle
    title: LanguageOptions
  }[]
}
