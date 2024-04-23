import {atom} from 'recoil';
import {IArticle, INew} from "../../types";


export const children = atom<IArticle>({
    key: 'children',
    default: {
        id: 3,
        title: "Бахрушинский детям",
         images: ['https://www.gctm.ru/wp-content/uploads/2024/04/eskiz-dekoraczii-k-spektaklyu-%C2%ABhovanshhina%C2%BB.-korovin-k.a.-streleczkoe-gnezdo.-imperatorskij-bolshoj-teatr.-1912-g.png', 'https://www.gctm.ru/wp-content/uploads/2024/04/eskiz-dekoraczii-k-opere-%C2%ABmlada%C2%BB.-fedotov-i.s.-svyashhennoe-ozero.-opera-s.i.-zimina.-1913-g.png'],

        page: <h1>{'Страница | Разводная страница с разделами'}</h1>,
        link: 'children',
        description: 'Разводная страница с разделами',
        menu: [
            {
                id: 0,
                title: "Детский центр",
                images: [''],
                page: <h1>{'Описательная страница с информацией о детском центре, его возможностях и программах, контакты, карта с указанием где находится.'}</h1>,
                link: '/centre/',
                description: 'Описательная страница с информацией о детском центре, его возможностях и программах, контакты, карта с указанием где находится.',
            },
            {
                id: 1,
                title: "Мастер-классы",
                images: [''],
                page: <h1>{'Страница со всеми текущими мастер-классами (как в разделе события)'}</h1>,
                link: '/masters/',
                description: 'Страница со всеми текущими мастер-классами (как в разделе события)',
            },
            {
                id: 2,
                title: "Экскурсии",
                images: [''],
                page: <h1>{'Страница | Страница со всеми текущими экскурсиями (как в разделе события)'}</h1>,
                link: '/cards/',
                description: 'Страница со всеми текущими экскурсиями (как в разделе события)',
            },
            {
                id: 3,
                title: "Игротека (Не в MVP)",
                images: [''],
                page: <h1>{'Разводная страница с разными квизами/тестами для детей на театральную тематику, переход на страницу каждого отдельного квиза.'}</h1>,
                link: '/toy-library/',
                description: 'Разводная страница с разными квизами/тестами для детей на театральную тематику, переход на страницу каждого отдельного квиза.',
            },
        ]
    }
});