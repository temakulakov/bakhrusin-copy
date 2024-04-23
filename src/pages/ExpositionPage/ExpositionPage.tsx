import styles from './ExpositionPage.module.scss';
import {useLocation} from "react-router-dom";

const ExpositionPage = () => {
    const { pathname } = useLocation();
    return <div className={styles.container}></div>
};

export default ExpositionPage;