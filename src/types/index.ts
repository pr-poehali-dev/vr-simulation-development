import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string | ReactNode
  subtitle?: ReactNode
  content?: ReactNode
  showButton?: boolean
  buttonText?: string
  secondaryButtonText?: string
  bg?: 'dark' | 'light' | 'accent'
  bgImage?: string
}

export interface SectionProps extends Section {
  isActive: boolean
}
