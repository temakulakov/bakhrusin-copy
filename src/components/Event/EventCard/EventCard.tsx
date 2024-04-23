import styles from './EventCard.module.scss';
import {IEvent} from "../../../types";
import {Link} from "react-router-dom";
import {useState} from "react";
import { motion } from "framer-motion";
import 'dayjs/locale/ru';
import dayjs from "dayjs"; // импорт русской локали
import geo from '../../../static/icons/geo.svg'
import arrow from '../../../static/icons/arrow.svg'


dayjs.locale('ru'); // установка локали

const EventCard = (event: IEvent) => {
    const [ selectedEvent, setSelectedEvent ] = useState<boolean>(false);
    console.log(event.type)
    // Формируем даты с использованием dayjs
    const fromDate = dayjs(event.date.from);
    const toDate = dayjs(event.date.to);

    const startMonth = fromDate.format('MMMM');
    const endMonth = toDate.format('MMMM');

    // Проверяем, одинаковый ли месяц у начальной и конечной даты
    const formattedFromDate = fromDate.format(`DD${startMonth === endMonth ? '' : ' MMMM'}`);
    const formattedToDate = toDate.format('DD MMMM');

    return <Link to={`${event.link}`} className={styles.wrapper} onMouseEnter={() => setSelectedEvent(true)}
                 onMouseLeave={() => setSelectedEvent(false)}>
        <motion.div
            className={styles.imageContainer}
            style={{transform: selectedEvent ? 'scale(1.03)' : 'scale(1)'}}
        >
            <motion.img
                src={event.image}
                style={{transform: selectedEvent ? 'scale(1.05)' : 'scale(1)'}}
                alt={event.title}

                viewport={{ once: false, amount: 0.5 }}
            />
            {event.type === 'pro' && <p className={styles.type}><div/>{'ПРО'}</p>}

        </motion.div>
        <motion.div



            className={styles.contentBlock}>
            <div className={styles.timeGroup}>
                <p>{`${formattedFromDate}   `}</p>
                <p>-{formattedToDate}</p>
            </div>
            <h4 className={styles.title}>{event.title}</h4>

            <div className={styles.position}>
                <img src={geo} alt={geo}/>
                <p>{event.position}</p>
            </div>
            <img src={arrow} alt={arrow} className={styles.arrow} style={{transform: selectedEvent ? 'translateX(0)' : 'translateX(-8px)'}}/>
        </motion.div>
    </Link>
};

export default EventCard;