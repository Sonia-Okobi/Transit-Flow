import React from 'react'
import './index.scss'

type BaseInputProps = {
    placeholder: string
}

export default function BaseInput({placeholder}: BaseInputProps) {
  return (
    <input className='base-input' type="text" placeholder={placeholder} />
  )
}