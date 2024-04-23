import styles from './NewsCard.module.scss';
import React from 'react';
import {INew} from "../../../types";
import {Link} from "react-router-dom";
import { motion } from 'framer-motion';
import dayjs from "dayjs";
dayjs.locale('ru'); // установка локали


const NewsCard = (props: INew) => {
    const [ hover, setHover ] = React.useState(false);
    const formattedToDate = props.date.format('DD MMMM');
    return <Link to={props.link} className={styles.wrapper} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <motion.div className={styles.img} animate={{ scale: hover ? 1.1 : 1, marginLeft: hover && props.id !== 1 && props.id !== 3 ? '10px' : '0', width: props.id === 1 || props.id === 3 ? '100%' : '80%', height: props.id === 1 || props.id === 3 ? '50%' : '60%', marginTop: hover ? '20px': '0'}} style={{ backgroundImage: `url(${props.image})`,  }} />
        <p>
            <p style={{ marginBottom: '20px'}}>{formattedToDate}</p>
            <h1 style={props.id === 1 || props.id === 3 ? { fontFamily:  '"TT Norms", sans-serif', fontSize: '14px'} : {}}>{props.title}</h1>
        </p>
    </Link>
};
// font-family: "TT Norms", sans-serif;
//font-size: 14px;
export default NewsCard;