import React from 'react';
import style from './style.module.scss';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface ListControllerProps {
    handlerPrev: () => void;
    handlerNext: () => void;
}

const ListController: React.FC<ListControllerProps> = ({handlerPrev, handlerNext}) => {
  return (
    <div className={style.box}>
        <Button onClick={handlerPrev} className={style.button}>
        <LeftOutlined className={style.image}/>
        </Button>
        <Button onClick={handlerNext} className={style.button}> 
        <RightOutlined className={style.image}/>
        </Button>
    </div>
  )
}

export default ListController