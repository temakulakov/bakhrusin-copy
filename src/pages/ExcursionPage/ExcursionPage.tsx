import styles from './ExcursionPage.module.scss';
import {useLocation} from "react-router-dom";
import {transliterate} from "../../helpers/translate";
import {useMemo} from "react";
import {useRecoilValue} from "recoil";
import {excursions} from "../../store/excursions/excursions";

const ExcursionPage = () => {
    const { pathname } = useLocation();
    const excursion = useRecoilValue(excursions);

    const content = excursion.find((item) => item.link === pathname.split('/')[2]);
    return <div className={styles.container}>
        <h1>
            {
                content ? content.page : 'Not Found'
            }

        </h1>
    </div>
};


export default ExcursionPage;