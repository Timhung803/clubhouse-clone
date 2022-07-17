import React from "react";
import style from "../style/phoneConfirm.module.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function CodeConfirm() {
  return (
    <div className={style.phoneConfirmContainer}>
      <Link exact to="get_username" className={style.backBtn}>
        <IoIosArrowBack />
      </Link>
      <div className="text-center">
        <h1 style={{ width: "100%", maxWidth: "200px", marginBottom: "1em" }}>
          Enter the code we just texted you
        </h1>
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            textAlign: "center",
            outline: "none",
          }}
        />
        <p className="mt-2">
          Didn't receive it? <span>Tap to resend.</span>
        </p>
      </div>
      <Link
        exact
        to="/allow_notification"
        className="primaryBtn d-flex align-items-center"
      >Next <IoIosArrowForward className="ms-1" style={{width: "20px", height: "20px"}}/></Link>
    </div>
  );
}