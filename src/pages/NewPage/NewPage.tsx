import styles from './NewPage.module.scss';
import {useLocation} from "react-router-dom";
import React from 'react';
import {useRecoilValue} from "recoil";
import {news} from "../../store/news/news";
import NewsWidget from "../../components/News/NewsWidget/NewsWidget";

const NewPage = () => {
    const { pathname } = useLocation();
    const newsData = useRecoilValue(news);

    return <div className={styles.container}>
        {
            pathname.split('/')[2] ?
                <>
                    <div className={styles.content}>
                        {newsData.find((item) => item.link === pathname.split('/')[2])?.page}
                    </div>

                    <div style={{background: 'red'}}>
                        <NewsWidget/>
                    </div>
                </>
                :
                <div>
                    <h1>Стартовая страница новостей</h1>
                    <NewsWidget/>
                </div>
        }
    </div>
};

export default NewPage;