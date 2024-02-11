import React, {useState } from 'react'
import { useGetPostsQuery} from '../../api/postsApi';
import { postsLimit, postsPortion } from '../../consts';
import { dictionary } from '../../dictionary';
import { Button, List, Pagination, Spin} from 'antd';
import Title from '../Text/Title';
import Description from '../Text/Description';
import style from './style.module.scss'
import ListController from '../ListController/ListController';
import {Link} from 'react-router-dom';
import { RedoOutlined } from '@ant-design/icons';

const Home = () => {
    const {postTitle, errorTitle} = dictionary
    const [page, setPage] = useState<number>(1);
    const {data, error, isLoading, refetch} = useGetPostsQuery({page});

    const handlerPrev = () => {
      setPage(prev => prev === 1? prev : prev -1)
    }

    const handlerNext = () => {
      setPage(prev => prev === postsLimit/postsPortion? prev : prev + 1)
    }

    const handleReloadData = () => {
      refetch(); 
    };
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
}

    if (isLoading) return <Spin className={style.loading} size='large'/>;
    if (error) return <div className={style.loading}><Title title={errorTitle}/></div>;
    return (
      <div className={style.home}>
        <div className={style.headerControll}>
          <Title title={postTitle}/>
          <Button onClick={handleReloadData} className={style.refetch}>
            <RedoOutlined />
          </Button>
        </div>
        <List
          className={style.list}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
            title={<Link to={`post?id=${item.id}`} ><Title title={item.title} /></Link>}
            description={<Description description={item.body}/>}
          />
          </List.Item>
        )}
        />
      <ListController handlerPrev={handlerPrev} handlerNext={handlerNext}/>
      <Pagination
                className={style.pagination}
                current={page}
                total={postsLimit}
                pageSize={postsPortion}
                onChange={handlePageChange}
                showSizeChanger={false}
            />
      </div>
    );
}

export default Home