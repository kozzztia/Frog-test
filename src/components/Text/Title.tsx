import React from 'react'
import style from './style.module.scss'

interface TitleProps {
    title : string;
}

const Title: React.FC<TitleProps> = ({title}) => {
  return (
    <p className={style.title}>{title}</p>
  )
}

export default Title