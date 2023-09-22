import React, {useState} from "react";
import styles from "./HeaderList.module.css";

const HeaderList = (props) => {
    const navArray = props.navArr;
  return(
    <ul className={styles.nav_list}>
    {navArray.map((e)=>{
      return <li key={e}><a href={`#${e}`}>{e}</a></li>
    })}
    </ul>
  )
};

export default HeaderList;
