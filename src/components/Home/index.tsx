import React, {useState } from 'react'
import { useGetPostsQuery} from '../../api/postsApi';
import { postsLimit, postsPortion } from '../../consts';
import { dictionary } from '../../dictionary';
import { List } from 'antd';
import Title from '../Text/Title';
import Description from '../Text/Description';
import style from './style.module.scss'
import ListController from '../ListController/ListController';

const Home = () => {
    const {postTitle, errorTitle} = dictionary
    const [page, setPage] = useState<number>(1);
    const {data, error, isLoading} = useGetPostsQuery({page});

    const handlerPrev = () => {
      setPage(prev => prev === 1? prev : prev -1)
    }

    const handlerNext = () => {
      setPage(prev => prev === postsLimit/postsPortion? prev : prev + 1)
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{errorTitle}</div>;
    return (
      <div className={style.home}>
        <h1>{postTitle}</h1>
        <List
          className={style.list}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
            title={<Title title={item.title} />}
            description={<Description description={item.body} />}
          />
          </List.Item>
        )}
        />
      <ListController handlerPrev={handlerPrev} handlerNext={handlerNext}/>
      </div>
    );
}

export default Home