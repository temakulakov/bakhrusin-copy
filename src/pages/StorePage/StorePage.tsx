import styles from './StorePage.module.scss';
import {useLocation} from "react-router-dom";

const StorePage = () => {
    const { pathname } = useLocation();

    return <div className={styles.container}>
        <h1>{pathname}</h1>

    </div>
};

export default StorePage;