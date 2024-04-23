import React from 'react';
import styles from './BuildingsCard.module.scss';
import {Link} from "react-router-dom";
import {IBuilding, INew} from "../../../types";

const BuildingsCard = (props: IBuilding) => {
    return  <Link to={props.link} className={styles.wrapper}>
        <img src={props.image} alt={props.title}/>
        <h1>{props.title}</h1>
        <img src={props.addImage} alt={props.title}/>
    </Link>
};

export default BuildingsCard;