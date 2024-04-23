import React from 'react';
import styles from './VisitorsPage.module.scss';
import {useParams} from "react-router-dom";

const VisitorsPage = () => {
    const { id } = useParams();
    return <div className={styles.wrapper}>
        <h1>Страница посетителей</h1>
    </div>
};

export default VisitorsPage;