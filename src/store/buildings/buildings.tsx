import {atom} from 'recoil';
import {IBuilding} from "../../types";
import ermolova from './static/ermolova.png';
import ermolova_dop from './static/ermolova.png';
import meirhold from './static/meirhold.png';
import meirhold_dop from './static/meirhold_dop.png';
import mironova from './static/mironova.png';
import mironova_dop from './static/mironova_dop.png';


export const buildings = atom<IBuilding[]>({
    key: 'buildings',
    default: [
        {
            id: 0,
            title: 'Дом-музей Ермоловой',
            color: 'white',
            backgroundColor: '#BB85AB',
            page: <h1>Дом-музей Ермоловой | СТРАНИЦА</h1>,
            image: ermolova,
            addImage: ermolova_dop,
            type: "filial",
            link: 'Dom-museum-Ermolovoj'
        },
        {
            id: 1,
            title: 'Музей-квартира Мейерхольда',
            color: 'white',
            backgroundColor: '#E10800',
            page: <h1>Музей-квартира Мейерхольда | СТРАНИЦА</h1>,
            image: meirhold,
            addImage: meirhold_dop,
            type: "filial",
            link: 'Muzej-kvartira-Mejerholda'
        },
        {
            id: 2,
            title: 'Музей-квартира Мироновых—Менакера',
            color: '#54565A',
            backgroundColor: '#E0C09F',
            page: <h1>Дом-музей Ермоловой | СТРАНИЦА</h1>,
            image: mironova,
            addImage: mironova_dop,
            type: "filial",
            link: 'Muzej-kvartira-Mironovyh—Menakera'
        },
        {
            id: 3,
            title: 'Филиал 1',
            color: 'white',
            backgroundColor: '#BB85AB',
            page: <h1>Дом-музей Ермоловой | СТРАНИЦА</h1>,
            image: ermolova,
            addImage: ermolova_dop,
            type: "filial",
            link: 'Filial-1'
        },
        {
            id: 4,
            title: 'Филиал 2',
            color: 'white',
            backgroundColor: '#BB85AB',
            page: <h1>Дом-музей Ермоловой | СТРАНИЦА</h1>,
            image: ermolova,
            addImage: ermolova_dop,
            type: "filial",
            link: 'Filial-2'
        },
        {
            id: 5,
            title: 'Филиал 3',
            color: 'white',
            backgroundColor: '#BB85AB',
            page: <h1>Дом-музей Ермоловой | СТРАНИЦА</h1>,
            image: ermolova,
            addImage: ermolova_dop,
            type: "filial",
            link: 'Filial-3'
        },
        {
            id: 6,
            title: 'Филиал 4',
            color: 'white',
            backgroundColor: '#BB85AB',
            page: <h1>Дом-музей Ермоловой | СТРАНИЦА</h1>,
            image: ermolova,
            addImage: ermolova_dop,
            type: 'quarter',
            link: 'Filial-4'
        },
        {
            id: 7,
            title: 'Филиал 5',
            color: 'white',
            backgroundColor: '#BB85AB',
            page: <h1>Дом-музей Ермоловой | СТРАНИЦА</h1>,
            image: ermolova,
            addImage: ermolova_dop,
            type: 'quarter',
            link: 'Filial-5'
        },
        {
            id: 8,
            title: 'Филиал 6',
            color: 'white',
            backgroundColor: '#BB85AB',
            page: <h1>Дом-музей Ермоловой | СТРАНИЦА</h1>,
            image: ermolova,
            addImage: ermolova_dop,
            type: 'quarter',
            link: 'Filial-6'
        },
        {
            id: 9,
            title: 'Филиал 7',
            color: 'white',
            backgroundColor: '#BB85AB',
            page: <h1>Дом-музей Ермоловой | СТРАНИЦА</h1>,
            image: ermolova,
            addImage: ermolova_dop,
            type: 'quarter',
            link: 'Filial-7'
        },
        {
            id: 10,
            title: 'Филиал 8',
            color: 'white',
            backgroundColor: '#BB85AB',
            page: <h1>Дом-музей Ермоловой | СТРАНИЦА</h1>,
            image: ermolova,
            addImage: ermolova_dop,
            type: 'quarter',
            link: 'Filial-8'
        },
        {
            id: 11,
            title: 'Филиал 9',
            color: 'white',
            backgroundColor: '#BB85AB',
            page: <h1>Дом-музей Ермоловой | СТРАНИЦА</h1>,
            image: ermolova,
            addImage: ermolova_dop,
            type: 'quarter',
            link: 'Filial-9'
        },
    ]
});