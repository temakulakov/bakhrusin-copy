import styles from './Shop.module.scss';
import ShopElement from "./Shop.Element";
import { motion } from "framer-motion";

import image1 from './static/images/1.png'
import image2 from './static/images/2.png'
import image3 from './static/images/3.png'
import image4 from './static/images/4.png'
import image5 from './static/images/5.png'
import image6 from './static/images/6.png'
import image7 from './static/images/7.png'
import image8 from './static/images/8.png'
import image9 from './static/images/9.png'
import image10 from './static/images/10.png'
import image11 from './static/images/11.png'
import image12 from './static/images/12.png'
import image13 from './static/images/13.png'

interface IEntity {
    id: number;
    title: string;
    link: string;
}

interface IShop extends IEntity {
    imageUrl: string;
    price: number;
}

const items: IShop[] = [
    { id: 0, title: "Товар 1", imageUrl: image1, link: "/", price: 100},
    { id: 1, title: "Товар 2", imageUrl: image2, link: "/", price: 100},
    { id: 2, title: "Товар 3", imageUrl: image3, link: "/", price: 100},
    { id: 3, title: "Товар 4", imageUrl: image4, link: "/", price: 100},
    { id: 4, title: "Товар 5", imageUrl: image5, link: "/", price: 100},
    { id: 5, title: "Товар 6", imageUrl: image6, link: "/", price: 100},
    { id: 6, title: "Товар 7", imageUrl: image7, link: "/", price: 100},
    { id: 7, title: "Товар 7", imageUrl: image8, link: "/", price: 100},
    { id: 8, title: "Товар 8", imageUrl: image9, link: "/", price: 100},
    { id: 9, title: "Товар 9", imageUrl: image10, link: "/", price: 100},
    { id: 10, title: "Товар 10", imageUrl: image11, link: "/", price: 100},
    { id: 11, title: "Товар 11", imageUrl: image12, link: "/", price: 100},
    { id: 12, title: "Товар 12", imageUrl: image13, link: "/", price: 100},
    { id: 3, title: "Товар 4", imageUrl: image4, link: "/", price: 100},

];

const Shop = () => {

    return <div className={styles.wrapper}>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.3, type: 'ease' }}

            className={styles.header}>
            <h1>{"Магазин"}</h1>
            <button>{"Перейти в магазин"}</button>
        </motion.div>
        <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 40,  }}
            whileInView={{ opacity: 1, y: 0,  }}
            exit={{ opacity: 0, y: 40,  }}
            transition={{ duration: 0.3, type: 'ease' }}
            viewport={{ once: false, amount: 0.1 }}
        >
            {
                items.slice(0, Math.ceil(items.length / 2)).map((item, index) => <ShopElement key={index} item={item}/>)
            }
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 40,  }}
            whileInView={{ opacity: 1, y: 0,  }}
            exit={{ opacity: 0, y: 40,  }}
            transition={{ duration: 0.3, type: 'ease' }}
            viewport={{ once: false, amount: 0.1 }}
            className={styles.content}>
            {
                items.slice(Math.ceil(items.length / 2)).map((item, index) => <ShopElement key={index} item={item}/>)
            }
        </motion.div>
    </div>
};

export default Shop;