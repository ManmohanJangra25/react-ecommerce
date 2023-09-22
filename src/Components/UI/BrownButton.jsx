import React from "react";
import styles from './BrownButton.module.css';

const BrownButton = (props) => {
    return (
        <button className={`${styles.brownBtn} ${styles[props.btnClasses]}`}>{props.btnName}</button>
    );
}

export default BrownButton;