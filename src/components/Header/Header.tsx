import styles from "./Header.module.scss";
import {useRecoilValue} from "recoil";
import {visitors} from "../../store/visitors/visitors";
import {exibitionsAndEvents} from "../../store/exibitionsAndEvents/exibitionsAndEvents";
import {yourself} from "../../store/yourself/yourself";
import {children} from "../../store/children/children";
import {lab} from "../../store/lab/lab";
import {online} from "../../store/online/online";
import {pro} from "../../store/pro/pro";
import {support} from "../../store/support/support";
import {Link} from "react-router-dom";
import Panel from "./Panel/Panel";
import React, {useEffect, useState} from "react";
import {IArticle} from "../../types";

import BMLogoLeft from './assets/BMLogoLeft.svg';
import BMLogoLine from './assets/BMLogoLine.svg';
import BMLogoRight from './assets/BMLogoRight.svg';
import BMText from './assets/BMText.svg';

import eye from './assets/eye.svg';
import search from './assets/search.svg';
import account from './assets/account.svg';
import {AnimatePresence, motion, useAnimation} from "framer-motion";

const Header = () => {

    const { scrollY, scrollDirection } = useScrollDirection();
    const [ hover, setHover ] = useState(false);

    const exibitionsAndEventsData = useRecoilValue(exibitionsAndEvents);
    const yourdelfData = useRecoilValue(yourself);
    const childrenData = useRecoilValue(children);
    const labData = useRecoilValue(lab);
    const onlineData = useRecoilValue(online);
    const proData = useRecoilValue(pro);
    const supportData = useRecoilValue(support);
    const visitorsData = useRecoilValue(visitors);
    const [selectedMenu, setSelectedMenu] = useState<IArticle | undefined>(undefined)
    const [lastDown, setLastDown] = useState<number>(0)


    useEffect(() => {
        console.log(scrollDirection);
        console.log(scrollY);
    }, [scrollY, scrollDirection]);

    useEffect(() => {
        if (selectedMenu === undefined) {
            setLastDown(0);
        }
    }, [selectedMenu])

    return <>
        <motion.header
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={() => setHover(false)}
            transition={{ type: "just", stiffness: 100 }}
            animate={{ y: scrollDirection || scrollY < 400 ? '0' : '-100%',  }}
            initial={{ y: '0' }}
            className={styles.wrapper}>
            <div className={styles.top}>
                <Link to={'/'} className={styles.logo}>
                    <img src={BMLogoLeft} alt="BMLogoLeft"/>
                    <img src={BMLogoLine} alt="BMLogoLine"/>
                    <img src={BMLogoRight} alt="BMLogoRight"/>
                    <img src={BMText} alt="BMText"/>
                </Link>
                <div className={styles.btnGroup}>
                    <button className={styles.store}>{'Магазин'}</button>
                    <button className={styles.ticket}>{'Купить билет'}</button>
                    <img src={eye} alt="Eye" className={styles.icon}/>
                    <img src={search} alt="Eye" className={styles.icon}/>
                    <img src={account} alt="Eye" className={styles.icon}/>
                    <div>
                        <button className={styles.lang}>{'РУ'}</button>
                        {/*<button className={styles.lang}>{'Eng'}</button>*/}
                    </div>
                </div>
            </div>
            <div className={styles.menu} onMouseLeave={() => {
                setSelectedMenu(undefined)
            }}>
                {visitorsData && <Link style={{
                    transition: 'all .3s ease',
                    borderRadius: '3px 3px 0 0',
                    backgroundColor: lastDown === 1 ? '#EEEEEF' : '',
                    color: lastDown === 1 ? 'black' : 'white',
                    padding: '4px 20px'
                }} onMouseEnter={() => {
                    setSelectedMenu(visitorsData);
                    setLastDown(1);
                }} to={visitorsData.link}>{visitorsData.title}</Link>}
                {exibitionsAndEventsData && <Link
                    style={{
                        transition: 'all .3s ease',
                        borderRadius: '3px 3px 0 0',
                        backgroundColor: lastDown === 2 ? '#EEEEEF' : '',
                        color: lastDown === 2 ? 'black' : 'white',

                        padding: '4px 20px'
                    }}
                    onMouseEnter={() => {
                    setSelectedMenu(exibitionsAndEventsData);
                    setLastDown(2);
                }} to={exibitionsAndEventsData.link}>{exibitionsAndEventsData.title}</Link>}
                {yourdelfData && <Link style={{
                    transition: 'all .3s ease',
                    borderRadius: '3px 3px 0 0',
                    backgroundColor: lastDown === 3 ? '#EEEEEF' : '',
                    color: lastDown === 3 ? 'black' : 'white',

                    padding: '4px 20px'
                }} onMouseEnter={() => {
                    setSelectedMenu(yourdelfData);
                    setLastDown(3);
                }} to={yourdelfData.link}>{yourdelfData.title}</Link>}
                {childrenData && <Link style={{
                    transition: 'all .3s ease',
                    borderRadius: '3px 3px 0 0',
                    backgroundColor: lastDown === 4 ? '#EEEEEF' : '',
                    color: lastDown === 4 ? 'black' : 'white',
                    padding: '4px 20px'
                }} onMouseEnter={() => {
                    setSelectedMenu(childrenData);
                    setLastDown(4);
                }} to={childrenData.link}>{childrenData.title}</Link>}
                {labData && <Link style={{
                    transition: 'all .3s ease',
                    backgroundColor: lastDown === 5 ? '#EEEEEF' : '',
                    color: lastDown === 5 ? 'black' : 'white',
                    borderRadius: '3px',
                    padding: '4px 20px'
                }} onMouseEnter={() => {
                    setSelectedMenu(labData);
                    setLastDown(5);
                }} to={labData.link}>{labData.title}</Link>}
                {onlineData && <Link style={{
                    transition: 'all .3s ease',
                    borderRadius: '3px 3px 0 0',
                    backgroundColor: lastDown === 6 ? '#EEEEEF' : '',
                    color: lastDown === 6 ? 'black' : 'white',
                    padding: '4px 20px'
                }} onMouseEnter={() => {
                    setSelectedMenu(onlineData);
                    setLastDown(6);
                }} to={onlineData.link}>{onlineData.title}</Link>}
                {proData && <Link style={{
                    transition: 'all .3s ease',
                    borderRadius: '3px 3px 0 0',
                    backgroundColor: lastDown === 7 ? '#EEEEEF' : '',
                    color: lastDown === 7 ? 'black' : 'white',
                    padding: '4px 20px'
                }} onMouseEnter={() => {
                    setSelectedMenu(proData);
                    setLastDown(7);
                }} to={proData.link}>{proData.title}</Link>}
                {supportData && <Link style={{
                    transition: 'all .3s ease',
                    borderRadius: '3px 3px 0 0',
                    backgroundColor: lastDown === 8 ? '#EEEEEF' : '',
                    color: lastDown === 8 ? 'black' : 'white',
                    padding: '4px 20px'
                }} onMouseEnter={() => {
                    setSelectedMenu(supportData);
                    setLastDown(8);
                }} to={supportData.link}>{supportData.title}</Link>}

                <AnimatePresence>
                    {
                        selectedMenu && selectedMenu.menu && <Panel element={selectedMenu} setElement={setSelectedMenu}/>
                    }
                </AnimatePresence>
            </div>
        </motion.header>
        <AnimatePresence>
            {
                selectedMenu && selectedMenu.menu && <motion.div key={selectedMenu.id} initial={{opacity: 0}} exit={{opacity: 0}} animate={{opacity: 1}} style={{
                    background: 'rgba(0,0,0,0.53)',
                    height: '5900px',
                    width: '100vw',
                    position: 'absolute',
                    zIndex: 1
                }}/>}
        </AnimatePresence>

    </>
};

const useScrollDirection = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollPosition(currentScrollY);

            // Определяем направление скролла
            if (currentScrollY > lastScrollTop) {
                setScrollDirection(false);
            } else if (currentScrollY < lastScrollTop) {
                setScrollDirection(true);
            }
            setLastScrollTop(currentScrollY); // Обновляем последнее значение скролла
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return {
        scrollY: scrollPosition,  // текущее положение скролла
        scrollDirection          // направление скролла: 'up' или 'down'
    };
};


export default Header;