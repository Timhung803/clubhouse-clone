import React from "react";
import { Link } from "react-router-dom";
import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { BsAt, BsPlus, BsUpload } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineSetting,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsFilePersonFill } from "react-icons/bs";

export default function Profile() {
  return (
    <>
      <div className={style.profileContainer}>
        <div className={exploreStyle.header}>
          <div className={`${exploreStyle.head} text-end mb-0`}>
            <Link to="/home">
              <IoIosArrowBack className={exploreStyle.headArrow} />
            </Link>
            <div className={style.actionBtn}>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>
        <BsFilePersonFill className={style.profile_image} />
        <h4>Rafeh Qazi</h4>
        <p>@cleverqazi</p>
        <div className={style.follow}>
          <p>
            <span>0</span> followers
          </p>
          <p>
            <span>51</span> following
          </p>
        </div>
        <button>Add a bio</button>
        <div className="mb-4">
          <button className="mb-0">
            <AiOutlineTwitter /> Add Twitter
          </button>
          <button className="mb-0">
            <AiOutlineInstagram /> Add Instagram
          </button>
        </div>
        <div className={style.nominated}>
          <BsFilePersonFill />
          <div>
            <p>Joined 14-July-2020</p>
            <p>
              Nominated by <span>Anton Alarcon</span>
            </p>
          </div>
        </div>
        <p>Member of</p>
        <button className={style.addMemberBtn}>
          <BsPlus />
        </button>
      </div>
    </>
  );
}
