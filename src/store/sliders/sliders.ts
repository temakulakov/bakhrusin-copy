import { atom } from 'recoil';
import image1 from './static/image 219.jpg'
import {IWidget} from "../../types";


export const sliders = atom<IWidget[]>({
    key: 'sliders',
    default: [
        {id: 0, backgroundColor: '#FFFFFF', color: '#54565A', buttonText: 'Смотреть', link: '/', title: 'Коллекции онлайн', description: 'Сегодня в фондах музея представлено более 1,5 млн. экспонатов. Это эскизы декораций, фотографии, костюмы актёров и многое другое', imageUrl: 'https://picsum.photos/400/500'},
        {id: 1, backgroundColor: '#F5E9BC', color: '#54565A', buttonText: 'Узнать подробности', link: '/', title: 'Бахрушинский детям', description: 'Историческое здание флигеля стало детским досуговым центром с театральной студией. Здесь дети разных возрастов смогут получить навыки по актерскому мастерству, вокалу, танцу, игре на музыкальных инструментах.', imageUrl: image1},
        {id: 2, backgroundColor: '#F5E9BC', color: '#54565A', buttonText: '', link: '/', title: 'Бахрушинский детям', description: '', imageUrl: 'https://picsum.photos/400/500'},
        {id: 3, backgroundColor: '#F5E9BC', color: '#54565A', buttonText: '', link: '/', title: 'Бахрушинский детям', description: '', imageUrl: 'https://picsum.photos/400/500'},
        {id: 4, backgroundColor: '#F5E9BC', color: '#54565A', buttonText: '', link: '/', title: 'Бахрушинский детям', description: '', imageUrl: 'https://picsum.photos/400/500'},
        {id: 5, backgroundColor: '#F5E9BC', color: '#54565A', buttonText: '', link: '/', title: 'Бахрушинский детям', description: '', imageUrl: 'https://picsum.photos/400/500'},
        {id: 6, backgroundColor: '#F5E9BC', color: '#54565A', buttonText: '', link: '/', title: 'Бахрушинский детям', description: '', imageUrl: 'https://picsum.photos/400/500'},
    ]
});