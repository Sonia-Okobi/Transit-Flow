import React from 'react'
import './index.scss'

type TransportMethodProps = {
    image: string
    type: string
    method: string
}

export default function TransportMethod({image, type, method}: TransportMethodProps) {
  return (
    <div className='transport-method'>
        <img src={image} alt="Transport Method" />
        <div className="transport-method__text">
            <p className="transport-type text--md">{type}</p>
            <p className="transport-method">{method}</p>
        </div>
    </div>
  )
}