import React from "react";
import style from "../style/explore.module.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";


export default function SubHeader(props) {
  return (
    <div className={style.head}>
      <Link to="/home">
        <IoIosArrowBack />
      </Link>
      <h3>{props.pageTitle}</h3>
    </div>
  );
}
