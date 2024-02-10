import React from 'react';
import style from './style.module.scss';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface ListControllerProps {
    handlerPrev: () => void;
    handlerNext: () => void;
}

const ListController: React.FC<ListControllerProps> = ({handlerPrev, handlerNext}) => {
  return (
    <div className={style.box}>
        <button onClick={handlerPrev} className={style.button}>
        <LeftOutlined />
        </button>
        <button onClick={handlerNext} className={style.button}> 
        <RightOutlined />
        </button>
    </div>
  )
}

export default ListController