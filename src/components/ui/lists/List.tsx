import React from 'react'
import './index.scss'

type ListProps = {
    icon: string
    text: string
}

export default function List({icon, text}: ListProps) {
  return (
    <div className='list'>
        <img src={icon} alt="Icon" className='list__icon'/>
        <p className='list__text text--lg'>{text}</p>
    </div>
  )
}