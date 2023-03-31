import React from 'react'
import logo from '../../../assets/svg/Logo.svg'
import './index.scss';

type LogoProps = {
    className?: string
}

export default function Logo({className}: LogoProps) {
  return (
    <div className={`logo ${className}`}><img src={logo} alt="Logo" /></div>
  )
}
