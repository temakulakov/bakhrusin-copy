import React, {useState} from "react";
import {motion, useMotionValue, useTransform, useAnimation, MotionValue} from "framer-motion";

interface IEntity {
    id: number;
    title: string;
    link: string;
}

interface IShop extends IEntity {
    imageUrl: string;
    price: number;
}

interface IProps {
    item: IShop;
}

const ShopElement: React.FC<IProps> = ({ item }) => {
    const [ hover, setHover ] = useState<boolean>(false);

    const cardX: MotionValue<number> = useMotionValue(0);
    const cardY: MotionValue<number> = useMotionValue(0);
    const rotateX = useTransform(cardY, [-300, 300], [10, -10]);
    const rotateY = useTransform(cardX, [-300, 300], [-10, 10]);
    const cardRotateX = useTransform(cardY, [-300, 300], [25, -25]);
    const cardRotateY = useTransform(cardX, [-300, 300], [-25, 25]);

    const positionControls = useAnimation();
    const hoverControls = useAnimation();

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - rect.left - rect.width / 2;
        const offsetY = event.clientY - rect.top - rect.height / 2;
        setHover(true);
        cardX.set(offsetX);
        cardY.set(offsetY);
        hoverControls.start({ scale: 1.05, boxShadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px" });
    };

    const handleMouseLeave = () => {
        positionControls.start({
            x: 0,
            y: 0,
            transition: { type: 'spring', stiffness: 1200, damping: 30 }
        });
        hoverControls.start({ scale: 1, boxShadow: "0px 0px 30px -7px rgba(0,0,0,0.45)" });
        cardX.set(0);
        cardY.set(0);
        setHover(false);

    };

    return (
        <motion.div
            style={{
                perspective: 800,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "300px",
                width: "192px",
                cursor: "pointer",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{
                    margin: "auto",
                    width: "192px",
                    height: "300px",
                    transformStyle: "preserve-3d",
                    perspective: 800,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    rotateX,
                    rotateY,
                }}
                transition={{ type: 'spring' }}
            >
                <motion.div
                    key="card"
                    animate={{
                        scale: hover ? 1.04 : 1, boxShadow: hover ? "rgba(0, 0, 0, 0.4) 0px 30px 90px" : "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                    }}

                    style={{
                        borderRadius: 5,
                        backgroundColor: "white",
                        width: 192,
                        height: 246,
                        transformStyle: "preserve-3d",
                        perspective: 800,
                        rotateX: cardRotateX,
                        rotateY: cardRotateY,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img style={{ borderRadius: '3px', maxHeight: '70%', width: '70%' }} src={item.imageUrl} alt={item.title}/>
                </motion.div>
                <div style={{ marginTop: "15px", textAlign: 'center', color: 'white', zIndex: 100 }}>
                    <h1 style={{color: 'white', fontSize: '20px'}}>{item.title}</h1>
                    <p style={{color: 'white', fontSize: '14px'}}>{item.price}₽</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default ShopElement;
