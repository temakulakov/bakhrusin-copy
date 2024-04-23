import { atom } from 'recoil';
import { IStore } from "../../types";

import image1 from './static/1.png';
import image2 from './static/2.png';
import image3 from './static/3.png';
import image4 from './static/4.png';
import image5 from './static/5.png';
import image6 from './static/6.png';
import image7 from './static/7.png';
import image8 from './static/8.png';
import image9 from './static/9.png';
import image10 from './static/10.png';
import image11 from './static/11.png';
import image12 from './static/12.png';
import image13 from './static/13.png';
import image14 from './static/14.png';
import image15 from './static/15.png';

import dayjs from "dayjs";


export const store = atom<IStore[]>({
    key: 'store',
    default: [
        {id: 0, title: 'картина', price: 345, image: image1, page: <h1>картина</h1>},
        {id: 1, title: 'плакат', price: 345, image: image2, page: <h1>плакат</h1>},
        {id: 2, title: 'блокнот', price: 345, image: image3, page: <h1>блокнот</h1>},
        {id: 3, title: 'ваза', price: 345, image: image4, page: <h1>ваза</h1>},
        {id: 4, title: 'тарелка', price: 345, image: image5, page: <h1>тарелка</h1>},
        {id: 5, title: 'брелок', price: 345, image: image6, page: <h1>брелок</h1>},
        {id: 6, title: 'книга', price: 345, image: image7, page: <h1>книга</h1>},
        {id: 7, title: 'диффузор', price: 345, image: image8, page: <h1>диффузор</h1>},
        {id: 8, title: 'блокнот', price: 345, image: image9, page: <h1>блокнот</h1>},
        {id: 9, title: 'рюкзак', price: 345, image: image10, page: <h1>рюкзак</h1>},
        {id: 10, title: 'кружка', price: 345, image: image11, page: <h1>кружка</h1>},
        {id: 11, title: 'книга', price: 345, image: image12, page: <h1>книга</h1>},
        {id: 12, title: 'картина', price: 345, image: image13, page: <h1>картина</h1>},
        {id: 13, title: 'плакат', price: 345, image: image14, page: <h1>плакат</h1>},
        {id: 14, title: 'плакат', price: 345, image: image15, page: <h1>плакат</h1>},
    ]
});