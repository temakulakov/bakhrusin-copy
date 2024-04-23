import styles from './Panel.module.scss';
import {useLocation} from "react-router-dom";
import image from './static/filials.png';
import {CSSProperties, useEffect} from "react";
import Slider from './Slider/Slider'
import slide0 from './static/slide0.jpg';
import slide1 from './static/slide1.jpg';
import slide2 from './static/slide2.jpg';
import slide3 from './static/slide3.jpg';



const Panel = () => {
    const { pathname } = useLocation();



    const rootStyles: {[key: string ]: CSSProperties}  = {
        '': {},
        'event': {},
        'excursion': {},
        'exhibition': {},
        'exposition': {},
        'news': {},
        'store': {},
    }
    return <div className={styles.wrapper}>
        <Slider/>
    </div>
};

export default Panel;