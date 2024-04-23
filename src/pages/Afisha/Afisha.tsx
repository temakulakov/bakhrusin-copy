import styles from './Afisha.module.scss';
import {useLocation} from "react-router-dom";

const Afisha = () => {
    const location = useLocation();
    return <div className={styles.container}>
        <h1>{location.pathname}</h1>
        expositions
    </div>
};

export default Afisha;