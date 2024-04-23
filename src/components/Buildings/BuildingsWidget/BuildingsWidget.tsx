import React, {useState} from 'react';
import styles from './BuildingsWidget.module.scss';
import {useRecoilValue} from "recoil";
import { motion } from 'framer-motion';

import BuildingsCard from "../BuildingsCard/BuildingsCard";
import {buildings} from "../../../store/buildings/buildings";
import {Link} from "react-router-dom";
import FilialCard from "../../Filials/FilialCard";
import {IEntity, IFilials} from "../../../types";
import dop1 from "../../Filials/static/filials/ermolova_dop.png";
import dop2 from "../../Filials/static/filials/meirhold_dop.png";
import dop3 from "../../Filials/static/filials/mironova_dop.png";

const BuildingsWidget = () => {

    const types: IEntity[] = [
        { id: 0, title: "Бахрушинский квартал", link: "" },
        { id: 1, title: "Филиалы", link: "" },
    ];

    const data: IFilials[] = [
        { id: 0, title: "Квартал 1", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: dop1, position: "Адрес квартала 1", link: "/", type: "quarter", backgroundColor: 'rgb(255,255,255)'},
        { id: 1, title: "Квартал 2", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: dop1, position: "Адрес квартала 2", link: "/", type: "quarter", backgroundColor: 'rgb(255,255,255)'},
        { id: 2, title: "Квартал 3", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: dop1, position: "Адрес квартала 3", link: "/", type: "quarter", backgroundColor: 'rgb(255,255,255)'},
        { id: 5, title: "Дом-музей Ермоловой", imageUrl: "https://gctm.ru/img/ermolova.jpg", imageAddUrl: dop1, position: "Адрес Филиала 6", link: "/", type: "filial", backgroundColor: 'rgb(187, 133, 171)'},
        { id: 6, title: "Музей-квартира мейерхольда", imageUrl: "https://gctm.ru/img/meirhold.jpg", imageAddUrl: dop2, position: "Адрес Филиала 7", link: "/", type: "filial", backgroundColor: 'rgb(225, 8, 0)'},
        { id: 7, title: "Музей-квартира мироновы-менкареа", imageUrl: "https://gctm.ru/img/mironova.jpg", imageAddUrl: dop3, position: "Адрес Филиала 8", link: "/", type: "filial", backgroundColor: 'rgb(224, 192, 159)'},
    ];

    const newsData = useRecoilValue(buildings);
    const [selectType, setSelectType] = useState<number>(1);

    return <motion.div className={styles.wrapper}>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.3, type: 'ease' }}
            className={styles.header}
        >
            <div className={styles.title}>
                {types.map(type => (
                    <h1 key={type.id} style={type.id === selectType ? {color: "white"} : {}}
                        onClick={() => setSelectType(type.id)}>
                        {type.title}
                    </h1>
                ))}
            </div>
            <button>{selectType === 1 ? "Все филиалы" : "Все здания"}</button>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 40,  }}
            whileInView={{ opacity: 1, y: 0,  }}
            exit={{ opacity: 0, y: 40,  }}
            transition={{ duration: 0.3, type: 'ease' }}
            viewport={{ once: false, amount: 0.5 }}
            key={selectType}

            className={styles.content}
        >
            {data.filter(filial => filial.type === (selectType === 1 ? 'filial' : 'quarter')).map(filial => (
                <FilialCard key={filial.id} filial={filial}/>
            ))}
        </motion.div>
    </motion.div>
};

export default BuildingsWidget;