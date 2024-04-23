import styles from './BuildingPage.module.scss';
import {useParams} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {buildings} from "../../store/buildings/buildings";

const BuildingPage = () => {
    const { id } = useParams();
    const buildingsData = useRecoilValue(buildings);

    return <div className={styles.container}>
        {
            buildingsData.find((building, index) => building.link === id)?.page
        }
    </div>
};

export default BuildingPage;