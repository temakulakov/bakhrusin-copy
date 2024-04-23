import styles from './Slider.module.scss';
import slider0 from '../static/slide0.jpg'
import slider1 from '../static/slide1.jpg'
import slider2 from '../static/slide2.jpg'
import arrow from '../static/arrow.svg';
import {motion, useAnimation, useMotionValue, useMotionValueEvent} from 'framer-motion';
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import AnimatedTextWord from "../../../helpers/AnimatedTextCharacter/AnimatedTextWord";
import AnimatedTextCharacter from "../../../helpers/AnimatedTextCharacter/AnimatedTextCharacter";

import filials from "../static/filials.png";
// @ts-ignore
import vidio from '../static/promo.mp4';

const imgs = [
    vidio, slider0, slider1, slider2
];

const dataSlides = [
    {
        title: '',
        additional: '',
        description: '',
        buttonText: '',
        link: ''
    },
    {
        title: 'Заголовок 0',
        additional: 'Текст сверху 0',
        description: 'Описание 0',
        buttonText: 'Кнопка 0',
        link: 'link0'
    },
    {
        title: 'Заголовок 1',
        additional: 'Текст сверху 1',
        description: 'Описание 1',
        buttonText: 'Кнопка 1',
        link: 'link1'
    },
    {
        title: 'Заголовок 2',
        additional: 'Текст сверху 2',
        description: 'Описание 2',
        buttonText: 'Кнопка 2',
        link: 'link2'
    },
]

const DRAG_BUFFER = 50;
const AUTO_DELAY = 1000;


const Slider = () => {
    const [imgIndex, setImgIndex] = useState(0);


    const controls = useAnimation();

    const imageVariants = {
        initial: {
            opacity: 0,
            backgroundPositionX: '0%',
            backgroundPositionY: '0%',
        },
        visible: {
            opacity: 0.5,
            transition: {duration: 1, ease: 'easeInOut'},
            zIndex: 0,
        },
        move: {
            backgroundPositionX: ['0%', '100%', '0%'],
            backgroundPositionY: ['0%', '100%', '0%'],

            transition: {
                duration: 45,  // Реалистичное значение для продолжительности анимации
                ease: "linear",
                repeat: Infinity,
                repeatType: "mirror" as 'mirror' | 'reverse' | 'loop'
            }
        }
    };


    const useNextSlide = () => {
        if (imgIndex > imgs.length - 2) {
            setImgIndex(0);
        } else {
            setImgIndex(imgIndex + 1);
        }
    };
    const usePrevSlide = () => {
        if (imgIndex < 1) {
            setImgIndex(imgs.length - 1);
        } else {
            setImgIndex(imgIndex - 1);
        }
    };

    // useEffect(() => {
    //     controls.start("visible").then(() => {
    //         controls.start("move");
    //     });
    // }, [controls, imgIndex]);  // Добавьте imgIndex в список зависимостей

    useEffect(() => {
        controls.start("visible");
    }, [controls, imgIndex]);

    const lineVariants = {
        hidden: { width: 0 },
        visible: {
            width: 300,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };
    return <div className={styles.wrapper}>
        <motion.div
            className={styles.container}
        >
            {
                imgIndex === 0 ? <motion.video
                    key="video"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 1}}
                    loop
                    autoPlay
                    muted
                    className={styles.img}
                >
                    <source src={imgs[0]} type="video/mp4"/>
                </motion.video> : <>
                    <motion.div key={imgs[imgIndex]}
                                style={{
                                    backgroundImage: `url(${imgs[imgIndex]})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '108%',

                                    backgroundPosition: 'center center',
                                    // padding: '20px',
                                }}
                                className={styles.img}
                                variants={imageVariants}
                                exit='initial'
                                initial="initial"
                                animate={controls}
                                onAnimationComplete={() => {
                                    // Анимация прозрачности завершена, начинаем анимацию перемещения
                                    controls.start("move");
                                }}

                    />

                    <motion.div className={styles.text}
                                key={imgIndex}
                                initial={{}}
                                animate={{}}
                                exit={{}}
                    >
                        <motion.div className={styles.lineLeft} variants={lineVariants} animate={'visible'} key={imgs[imgIndex]} exit={'hidden'} initial={'hidden'}/>

                        {/*<motion.p>{dataSlides[imgIndex].additional}</motion.p>*/}
                        <AnimatedTextCharacter text={dataSlides[imgIndex].additional}/>
                        <AnimatedTextWord text={dataSlides[imgIndex].title}/>
                        <AnimatedTextWord text={dataSlides[imgIndex].description}/>
                        {/*<motion.h1>{dataSlides[imgIndex].title}</motion.h1>*/}
                        {/*<motion.p>{dataSlides[imgIndex].title}</motion.p>*/}
                        <Link to={dataSlides[imgIndex].link}>{dataSlides[imgIndex].buttonText}</Link>
                        {/*<motion.div className={styles.line} variants={lineVariants} exit={'hidden'} initial={'hidden'}*/}
                        {/*            animate={'visible'} key={imgs[imgIndex]}/>*/}
                        <motion.div className={styles.lineRight} variants={lineVariants} animate={'visible'} key={imgs[imgIndex]} exit={'hidden'} initial={'hidden'}/>
                    </motion.div>

                </>
            }

            <img onClick={usePrevSlide} src={arrow} alt="arrow" className={styles.petal}
                 style={{left: '1vw', transform: 'rotate(-180deg)'}}/>
            <img onClick={useNextSlide} src={arrow} alt="arrow" className={styles.petal}/>
            <img src={filials} alt={''} className={styles.filials}/>
        </motion.div>
    </div>
}


// const Slider = () => {
//     const [ dragging, setDragging ] = useState(false);
//     const [ imgIndex, setImgIndex] = useState(0);
//
//     const dragX = useMotionValue(0);
//
//     useEffect(() => {
//         const intervalRef = setInterval(() => {}, AUTO_DELAY);
//         return () => clearInterval(intervalRef);
//     }, []);
//
//     const onDragStart = () => {
//         setDragging(true);
//     }
//
//     const onDragEnd = () => {
//         setDragging(false);
//
//         const x = dragX.get();
//
//         if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
//             setImgIndex(pv => pv + 1);
//         } else if (x >= -DRAG_BUFFER && imgIndex > 0) {
//             setImgIndex(pv => pv - 1);
//         }
//     }
//
//     return <div className={styles.wrapper}>
//         <motion.div
//             drag={'x'}
//             style={{
//                 x: dragX
//             }}
//             animate={{
//                 translateX: `-${imgIndex}00%`
//             }}
//             dragConstraints={{
//                 left: 0,
//                 right: 0,
//             }}
//             className={styles.container}
//             onDragStart={onDragStart}
//             onDragEnd={onDragEnd}
//             transition={{type: "spring",
//                 mass: 3,
//                 damping: 80,
//                 stiffness: 400}}
//         >
//             <Images imgIndex={imgIndex} />
//         </motion.div>
//         <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
//     </div>
// };

const Images = ({imgIndex}: { imgIndex: number; }) => {
    return (
        <>
            {
                imgs.map((imgSrc, idx) => {
                    return <motion.div key={idx}
                                       style={{
                                           backgroundImage: `url(${imgSrc})`,
                                           backgroundSize: "cover",
                                           backgroundPosition: "center center",
                                       }}
                                       className={styles.img}
                                       animate={{opacity: imgIndex === idx ? 1 : .5}}
                    >
                        <div className={styles.text}>
                            {/*<motion.div className={styles.line} variants={lineVariants}/>*/}
                            <p>{dataSlides[idx].additional}</p>
                            <h1>{dataSlides[idx].title}</h1>
                            <p>{dataSlides[idx].title}</p>
                            <Link to={dataSlides[idx].link}>{dataSlides[idx].buttonText}</Link>
                            <Link to={dataSlides[imgIndex].link}>{dataSlides[imgIndex].buttonText}</Link>
                        </div>
                    </motion.div>
                })
            }
        </>
    )
};


const Dots = ({imgIndex, setImgIndex}: { imgIndex: number; setImgIndex: Dispatch<SetStateAction<number>> }) => {
    return <div className={styles.dots}>
        {
            imgs.map((imgSrc, idx) => {
                return <button key={idx} onClick={() => setImgIndex(idx)} className={styles.dot} style={{
                    backgroundColor: idx === imgIndex ? 'white' : 'rgba(255, 255, 255, 0.51)',
                    width: idx === imgIndex ? '40px' : '20px'
                }}/>
            })
        }
    </div>
}

export default Slider;