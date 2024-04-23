import styles from './HomePage.module.scss';
import EventWidget from "../../components/Event/EventWidget/EventWidget";
import NewsWidget from "../../components/News/NewsWidget/NewsWidget";
import BuildingsWidget from "../../components/Buildings/BuildingsWidget/BuildingsWidget";
import Filials from "../../components/Filials/Filials";
import Widget from "../../components/Widget/Widget";
import News from "../../components/News/News";
import Shop from "../../components/Shop/Shop";
import InfiniteScrollLinks from "../../components/Line/Line";

const linksData = [
    { title: "Google", link: "https://www.google.com" },
    { title: "Facebook", link: "https://www.facebook.com" },
    { title: "Twitter", link: "https://www.twitter.com" },
    { title: "LinkedIn", link: "https://www.linkedin.com" },
    // Добавьте столько ссылок, сколько необходимо
];

const HomePage = () => {
    return <div className={styles.container}>
        <EventWidget/>
        <Widget/>
        {/*<News/>*/}

        <NewsWidget/>

        {/*<InfiniteScrollLinks items={linksData}/>*/}

        <Shop/>
        <Widget/>

        <BuildingsWidget/>
        {/*<Filials/>*/}
    </div>
}

export default HomePage;