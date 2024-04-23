import styles from './EventWidget.module.scss';
import React, {useEffect, useRef} from 'react';
import {useRecoilValue} from "recoil";
import {events} from "../../../store/events/events";
import EventCard from "../EventCard/EventCard";
import {excursions} from "../../../store/excursions/excursions";
import {Link} from "react-router-dom";
import {exhibitions} from "../../../store/exhibitions/exhibitions";
import {expositions} from "../../../store/expositions/expositions";
import {useInView, motion} from "framer-motion";

const EventWidget = () => {
    const [sectionActive, setSectionActive] = React.useState<number>(0);
    const sections: { link: string; title: string; }[] = [
        {link: '/expositions', title: 'Выставки'},
        {link: '/excursions', title: 'Экскурсии'},
        {link: '/exhibitions', title: 'Экспозиции'},
        {link: '/events', title: 'События'},
    ];

    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        console.log(ref.current)
        console.log(isInView)
    }, [isInView])

    const expositionsData = useRecoilValue(expositions);
    const excursionsData = useRecoilValue(excursions);
    const eventsData = useRecoilValue(events);
    const exhibitionsData = useRecoilValue(expositions);

    console.log(exhibitionsData)


    return <div className={styles.wrapper} ref={ref}>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.3, type: 'ease' }}
            // key={sectionActive}
            className={styles.header}>
            <div className={styles.sectionGroups}>{sections.map((section, i) => <h1
                className={styles.sectionTitle}
                style={{color: sectionActive === i ? '#54565A' : ''}}
                onClick={() => setSectionActive(i)}
                key={i}>{section.title}</h1>)}</div>
            <Link to={sections[sectionActive].link}>{`Все ${sections[sectionActive].title}`}</Link>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 40,  }}
            whileInView={{ opacity: 1, y: 0,  }}
            exit={{ opacity: 0, y: 40,  }}
            transition={{ duration: 0.3, type: 'ease' }}
            viewport={{ once: false, amount: 0.5 }}
            key={sections[sectionActive].title}
            className={styles.body}
        >
            {   sectionActive === 0 && exhibitionsData.slice(-3).map((item, i) => <EventCard id={item.id}
                                                                                   link={`/exhibitions/${item.link}`}
                                                                                   date={item.date}
                                                                                   title={item.title}
                                                                                   image={item.image}
                                                                                   page={item.page}
                                                                                   position={item.position}
                                                                                   type={item.type}
                                                                                   key={i}/>)}
            {   sectionActive === 1 && excursionsData.slice(-3).map((item, i) => <EventCard id={item.id}
                                                                                   link={`/excursion/${item.link}`}
                                                                                   date={item.date}
                                                                                   title={item.title}
                                                                                   image={item.image}
                                                                                   page={item.page}
                                                                                   position={item.position}
                                                                                   type={item.type}
                                                                                   key={i}/>)}
            {
                sectionActive === 2 && eventsData.slice(-3).map((item, i) => <EventCard id={item.id}
                                                       link={`/event/${item.link}`}
                                                       date={item.date}
                                                       title={item.title}
                                                       image={item.image}
                                                       page={item.page}
                                                       position={item.position}
                                                       type={item.type}
                                                       key={i}/>)
            }
            {
                sectionActive === 3 && expositionsData.slice(-3).map((item, i) => <EventCard id={item.id}
                                                            link={`/expositions/${item.link}`}
                                                            date={item.date}
                                                            title={item.title}
                                                            image={item.image}
                                                            page={item.page}
                                                            position={item.position}
                                                            type={item.type}
                                                            key={i}/>)
            }
        </motion.div>
    </div>
};

export default EventWidget;