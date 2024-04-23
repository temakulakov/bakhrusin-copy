import {atom} from 'recoil';
import {IArticle, INew} from "../../types";


export const lab = atom<IArticle>({
    key: 'lab',
    default: {
        id: 4,
        title: "Театральная лаболатория",
        images: [''],
        page: <h1>{'Описательную страницу, где рассказывается о театральной лаборатории, сотрудничестве с вузами, есть форма обратной связи и контакты театральной лаборатории, карта яндекс с указанием, где находится.'}</h1>,
        link: 'lab',
        description: 'Описательную страницу, где рассказывается о театральной лаборатории, сотрудничестве с вузами, есть форма обратной связи и контакты театральной лаборатории, карта яндекс с указанием, где находится.',
    }
});