import React from 'react'
import './index.scss'

type TextAreaProps = {
    className: string
    placeholder: string
}

export default function BaseTextArea({className,placeholder}: TextAreaProps) {
  return (
    <textarea className={`base-input ${className}`} placeholder={placeholder} />
  )
}