import styles from './Panel.module.scss';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {IArticle} from "../../../types";
import {Link} from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion'

interface Props {
    element: IArticle;
    setElement: Dispatch<SetStateAction<IArticle | undefined>>;
}

function hasNestedMenu(article: IArticle): boolean {
    if (article.menu) {
        for (const subArticle of article.menu) {
            if (subArticle.menu) {
                return true;
            }
        }
    }
    return false;
}

const Panel = ({element, setElement}: Props) => {
    const [activeMenu, setActiveMenu] = useState<IArticle>(element);
    if (hasNestedMenu(element)) {
        return <motion.div className={styles.wrapper} onMouseLeave={() => {
            setElement(undefined)
        }}>
            <div className={styles.contentBlock}>
                {
                    element && element.menu && element.menu.map((item, i) => <Link onMouseEnter={() => {
                        setActiveMenu(item)
                    }} to={item.link}>{item.title}</Link>)
                }
            </div>
            <div className={styles.contentBlock}>
                {
                    activeMenu.images[0] !== '' && <img src={activeMenu.images[0]} alt={activeMenu.title}/>

                }
                {
                    activeMenu.description
                }
            </div>
        </motion.div>
    } else {
        return <AnimatePresence>
            <motion.div
                key={element.id}
                initial={{opacity: 0, y: 0, height: '5%'}}
                animate={{opacity: 1, y: 0, height: 'fit-content'}}
                exit={{opacity: 0, y: 0, height: '5%'}}
                className={styles.wrapper} onMouseLeave={() => {
                setElement(undefined)
            }}>
                <div className={styles.contentBlock} style={{paddingLeft: '150px'}}>
                    {
                        element && element.menu && element.menu.map((item, i) => <Link onMouseEnter={() => {
                            setActiveMenu(item)
                        }} to={item.link}>{item.title}</Link>)
                    }
                </div>

                <div className={styles.contentBlock}>
                        {
                            activeMenu.images[0] !== '' && <motion.img key={activeMenu.id}
                                                                       // initial={{ opacity: 0, y: 10}} animate={{ opacity: 1, y: 0}} exit={{ opacity: 0, y: 10}}
                                                                       src={activeMenu.images[0]} alt={activeMenu.title}/>
                        }
                    {
                        activeMenu.images[1] !== '' && <img src={activeMenu.images[1]} alt={activeMenu.title}/>
                    }
                    <p>
                        {
                            // activeMenu.description
                        }
                    </p>

                </div>

            </motion.div>
        </AnimatePresence>
    }

};

export default Panel;