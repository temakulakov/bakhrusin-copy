import styles from './ExhibitionPage.module.scss';
import {useLocation} from "react-router-dom";

const ExhibitionPage = () => {
    const { pathname } = useLocation();

    return <div className={styles.container}>
        <h1>{pathname}</h1>
    </div>
};

export default ExhibitionPage;