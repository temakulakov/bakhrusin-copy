import { Outlet } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from './styles/Layout.module.scss';
import Panel from "./components/Panel/Panel";

const Layout = () => (
    <div className={styles.root}>
        <Header/>
        <Panel/>
        <main className={styles.main}>
            <Outlet />
        </main>
        <Footer/>
    </div>
);

export default Layout;
