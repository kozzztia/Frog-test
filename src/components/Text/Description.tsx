import React from 'react'
import style from './style.module.scss'

interface DescriptionProps {
    description : string;
}

const Title: React.FC<DescriptionProps> = ({description}) => {
  return (
    <p className={style.description}>{description}</p>
  )
}

export default Title