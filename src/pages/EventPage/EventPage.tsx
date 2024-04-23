import styles from './EventPage.module.scss';
import {useLocation} from "react-router-dom";

const EventPage = () => {
    const { pathname } = useLocation();

    return <div className={styles.container}>
        <h1>{pathname}</h1>
    </div>
};

export default EventPage;