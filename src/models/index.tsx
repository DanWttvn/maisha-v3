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

interface SectionData {
  id: SectionTitle
  title: { ES: string; EN: string; SW: string }
  subsections?: {
    id: SubSectionTitle
    title: { ES: string; EN: string; SW: string }
  }[]
}

// TODOs: quitar de models
export const sectionsData: SectionData[] = [
  {
    id: 'about',
    title: {
      ES: 'Quiénes somos',
      EN: 'Who we are',
      SW: 'Sisi ni nani',
    },
    subsections: [
      {
        id: 'know-us',
        title: {
          ES: 'Conócenos',
          EN: 'Know us',
          SW: 'Kutufahamu',
        },
      },
      {
        id: 'where',
        title: {
          ES: 'Dónde trabajamos',
          EN: 'Where we work',
          SW: 'Tunafanya kazi wapi',
        },
      },
      {
        id: 'context',
        title: {
          ES: 'Nuestro contexto',
          EN: 'Our context',
          SW: 'Muktadha wetu',
        },
      },
    ],
  },
  {
    id: 'timeline',
    title: {
      ES: 'De dónde venimos',
      EN: 'Where we come from',
      SW: 'Tumetoka wapi',
    },
  },
  {
    id: 'how-work',
    title: {
      ES: 'Cómo trabajamos',
      EN: 'How we work',
      SW: 'Fanya Kazi',
    },
    subsections: [
      {
        id: 'structure',
        title: {
          ES: 'Estructura',
          EN: 'Structure',
          SW: 'Muundo',
        },
      },
      {
        id: 'collaborators',
        title: {
          ES: 'Colaboradoras/es',
          EN: 'Collaborators',
          SW: 'Washirika',
        },
      },
    ],
  },
  {
    id: 'projects',
    title: {
      ES: 'Qué hacemos',
      EN: 'What we do',
      SW: 'Tunafanya nini',
    },
  },
  {
    id: 'collaborate',
    title: {
      ES: 'Colabora',
      EN: 'Collaborate',
      SW: 'Shiriki',
    },
    subsections: [
      {
        id: 'volunteering',
        title: {
          ES: 'Voluntariado',
          EN: 'Volunteers',
          SW: 'Kujitolea',
        },
      },
      {
        id: 'donate',
        title: {
          ES: 'Donaciones',
          EN: 'Donations',
          SW: 'Changia',
        },
      },
      {
        id: 'entities',
        title: {
          ES: 'Entidades',
          EN: 'Partners',
          SW: 'Washirika',
        },
      },
    ],
  },
  {
    id: 'transparency',
    title: {
      ES: 'Transparencia',
      EN: 'Transparency',
      SW: 'Uwazi Gharama',
    },
    subsections: [
      {
        id: 'good-practices',
        title: {
          ES: 'Buen gobierno',
          EN: 'Good governance',
          SW: 'Utawala bora',
        },
      },
      {
        id: 'reports',
        title: {
          ES: 'Memorias',
          EN: 'Reports',
          SW: 'Ripoti',
        },
      },
    ],
  },
]
