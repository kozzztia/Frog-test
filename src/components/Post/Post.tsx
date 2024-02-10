import { Spin } from 'antd';
import { useGetAboutPostQuery } from '../../api/postsApi';
import Title from '../Text/Title';
import { dictionary } from '../../dictionary';
import style from './style.module.scss';
import Description from '../Text/Description';
import { Link } from 'react-router-dom';

const Post = () => {
    const { errorTitle, back } = dictionary;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = Number(urlParams.get('id'));

    const { data, error, isLoading } = useGetAboutPostQuery({ id }); 

    if (isLoading) {
        return <Spin className={style.loading} size='large' />;
    }

    if (error) {
        return (
            <div className={style.post}>
                <Title title={errorTitle} />
            </div>
        );
    }

    return (
        <div className={style.post}>
            {data && (
                <article className={style.article}>
                    <Title title={`№: ${data.id} - ${data.title}`} />
                    <Description description={data.body} />
                </article>
            )}
            <Link to={`/`} className={style.button}><Title title={back}/ ></Link>
        </div>
    );
}

export default Post;