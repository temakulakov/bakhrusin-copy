import React from "react";
import styles from "./Footer.module.scss";
import ministerstvo from "./static/ministerstvo.svg";
import gosuslugi from "./static/gosuslugi.svg";
import cultura from "./static/cultura.svg";
import kachestvo from './static/kachestvo.svg';
import yt from "./static/yt.svg";
import rt from "./static/rt.svg";
import vk from "./static/vk.svg";
import tg from "./static/tg.svg";
import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";

import {about} from "../../store/about/about";
import {exibitionsAndEvents} from "../../store/exibitionsAndEvents/exibitionsAndEvents";
import {additional} from "../../store/additional/additional";
import {IArticle} from "../../types";


const Footer = () => {
    const visitorsData: IArticle = {
        id: 0,
        title: "Посетителям",
        images: [''],
        page: <></>,
        link: 'visitors',
        description: "",
        menu: [
            {
                id: 0,
                title: "Здания и часы работы",
                images: [''],
                page: <></>,
                link: 'mission',
                description: "buildings",
            },
            {
                id: 1,
                title: "Купить билет",
                images: [''],
                page: <></>,
                link: 'management',
                description: "",
            },
            {
                id: 2,
                title: "Билеты и льготы",
                images: [''],
                page: <></>,
                link: 'tickets',
                description: "",
            },
            {
                id: 3,
                title: "Правила и условия посещения",
                images: [''],
                page: <></>,
                link: 'press',
                description: "",
            },
            {
                id: 4,
                title: "Кафе и рестораны",
                images: [''],
                page: <></>,
                link: 'cafe',
                description: "",
            },
        ]
    }
    const aboutData = useRecoilValue(about);
    const exibitionsAndEventsData = useRecoilValue(exibitionsAndEvents);
    const additionalData = useRecoilValue(additional);

    return <div className={styles.wrapper}>
        <div className={styles.content}>
            <div className={styles.block}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Link to={visitorsData.link} className={styles.title}><h1>{visitorsData.title}</h1></Link>

                    {
                        visitorsData && visitorsData.menu && visitorsData.menu.map((item, i) => <Link key={i}
                                                                                                      to={`visitors/${item.link}`}>{item.title}</Link>)
                    }
                </div>
                <img src={ministerstvo} alt="ministerstvo"/>
            </div>

            <div className={styles.block}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Link to={`/about/${aboutData.link}`} className={styles.title}><h1>{aboutData.title}</h1></Link>

                    {
                        aboutData && aboutData.menu && aboutData.menu.map((item, i) => <Link key={i}
                                                                                             to={`/about${item.link}`}>{item.title}</Link>)
                    }
                </div>
                <img src={gosuslugi} alt="gosuslugi"/>
            </div>

            <div className={styles.block}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Link to={exibitionsAndEventsData.link} className={styles.title}><h1>{exibitionsAndEventsData.title}</h1></Link>

                    {
                        exibitionsAndEventsData && exibitionsAndEventsData.menu && exibitionsAndEventsData.menu.map((item, i) =>
                            <Link key={i}
                                  to={item.link}>{item.title}</Link>)
                    }
                </div>
                <img src={cultura} alt="cultura"/>
            </div>

            <div className={styles.block}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Link to={additionalData.link} className={styles.title}><h1>{additionalData.title}</h1></Link>
                    {
                        additionalData && additionalData.menu && additionalData.menu.map((item, i) =>
                            <Link key={i}
                                  to={item.link}>{item.title}</Link>)
                    }
                </div>
                <div className={styles.imgGroup}>
                    <a href={'https://rutube.ru/channel/23745556/'}>
                        <img src={rt} alt="rt"/>
                    </a>
                    <a href={'https://t.me/bakhrushinmuseum'}>
                        <img src={tg} alt="tg"/>

                    </a>
                    <a href={'https://vk.com/bahrushinmuseum'}>
                        <img src={vk} alt="vk"/>

                    </a>
                    <a href={'https://www.youtube.com/@bakhrushinmuseum'}>
                        <img src={yt} alt="yt"/>
                    </a>

                </div>
            </div>
        </div>
    </div>
}
export default Footer;
