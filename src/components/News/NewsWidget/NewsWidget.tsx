import styles from './NewsWidget.module.scss';
import React from 'react';
import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {news} from "../../../store/news/news";
import NewsCard from "../NewsCard/NewsCard";
import { motion } from 'framer-motion'

const NewsWidget = () => {
    const newsData = useRecoilValue(news)
    return <div className={styles.wrapper}>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.3, type: 'ease' }}

            className={styles.header}>
            <h1>Новости</h1>
            <Link to='/news'>Все новости</Link>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.3, type: 'ease' }}

            className={styles.body}>
            {
                newsData.slice(0, Math.ceil(newsData.length / 2)).map((news, index) => <NewsCard key={index} id={news.id} title={news.title} page={news.page}
                                                                                                 date={news.date} image={news.image}
                                                                                                 link={`/news/${news.link}`}/>)
            }
        </motion.div>
        <motion.div className={styles.body}>
            {
                newsData.slice(Math.ceil(newsData.length / 2)).map((news, index) => <NewsCard key={index} id={news.id} title={news.title} page={news.page}
                                                                                                 date={news.date} image={news.image}
                                                                                                 link={`/news/${news.link}`}/>)
            }
        </motion.div>
    </div>
};

export default NewsWidget;