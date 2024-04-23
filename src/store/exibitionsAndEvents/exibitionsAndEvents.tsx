import {atom} from 'recoil';
import {IArticle, INew} from "../../types";
import image from '../../components/Panel/static/slide0.jpg'

export const exibitionsAndEvents = atom<IArticle>({
    key: 'exibitionsAndEvents',
    default: {
        id: 1,
        title: "Выставки и события",
        images: ['https://www.gctm.ru/wp-content/uploads/2024/04/eskiz-dekoraczii-k-spektaklyu-%C2%ABhovanshhina%C2%BB.-korovin-k.a.-streleczkoe-gnezdo.-imperatorskij-bolshoj-teatr.-1912-g.png'],
        page: <h1>{'Разводная страница с разделами.'}</h1>,
        link: 'exibitionsAndEvents',
        description: 'Разводная страница с разделами.',
        menu: [
            {
                id: 0,
                title: "Выставки",
                images: ['https://www.gctm.ru/wp-content/uploads/2024/04/eskiz-dekoraczii-k-spektaklyu-%C2%ABhovanshhina%C2%BB.-korovin-k.a.-streleczkoe-gnezdo.-imperatorskij-bolshoj-teatr.-1912-g.png'],
                page: <h1>{'Страница со всеми Выставками, внутри разделение на: 1.текущие, 2. будущее, 3. международные 4. архив'}</h1>,
                link: '/exhibitions/',
                description: 'Страница со всеми Выставками, внутри разделение на: 1.текущие, 2. будущее, 3. международные 4. архив',
            },
            {
                id: 1,
                title: "Билеты и льготы",
                images: [image],
                page: <h1>{'Страница с постоянными экспозициями (как у Третьяковки)'}</h1>,
                link: '/tickets/',
                description: 'Страница с постоянными экспозициями (как у Третьяковки)',
            },
            {
                id: 2,
                title: "Постоянные экспозиции",
                images: [image],
                page: <h1>{'Страница со всеми Событиями, внутри разделение на разные события, на первом этапе: 1.текущие, 2. будущее, 3. архив'}</h1>,
                link: '/expositions/',
                description: 'Страница со всеми Событиями, внутри разделение на разные события, на первом этапе: 1.текущие, 2. будущее, 3. архив',
            },
            {
                id: 3,
                title: "События",
                images: [image],
                page: <h1>{'Страница | Описательная страница с информацией о ресторанах/кафе/буфете, внизу шахматка с фото, названием ресторана и его контактами.'}</h1>,
                link: '/events/',
                description: 'Описательная страница с информацией о ресторанах/кафе/буфете, внизу шахматка с фото, названием ресторана и его контактами.',
            },
            {
                id: 4,
                title: "Экскурсии",
                images: [image],
                page: <h1>{'Описательная страница с информацией, как заказать экскурсию и контактами отдела продаж- подборка из мероприятий, на которые доступны экскурсии'}</h1>,
                link: '/excursions/',
                description: 'Описательная страница с информацией, как заказать экскурсию и контактами отдела продаж- подборка из мероприятий, на которые доступны экскурсии',
            },
            {
                id: 5,
                title: "Онлайн выставки",
                images: [image],
                page: <h1>{'Разводная страница с переходом на лендинги с онлайн выставками'}</h1>,
                link: '/online/',
                description: 'Разводная страница с переходом на лендинги с онлайн выставками',
            },
            {
                id: 6,
                title: "Новости",
                images: [image],
                page: <h1>{'Страница со всеми новостями музея- вкладка \\"СМИ о нас\\", где даются лого изданий и их статьи о музее'}</h1>,
                link: '/news/',
                description: 'Страница со всеми новостями музея- вкладка \\"СМИ о нас\\", где даются лого изданий и их статьи о музее',
            },
        ]
    }
});