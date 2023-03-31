import React, { ReactNode } from 'react'
import './index.scss'

type BaseButtonProps = {
    children: ReactNode
    variant: string
    className?: string
}

export default function BaseButton({children, variant, className}: BaseButtonProps) {
  return (
    <button className={`base-button--${variant} ${className} text--sm`}>{children}</button>
  )
}