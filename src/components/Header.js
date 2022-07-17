import React from "react";
import { Link } from "react-router-dom";
import style from "../style/header.module.css";
import { FcSearch, FcInvite,FcCalendar } from "react-icons/fc";
import { MdCircleNotifications } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <div className={style.Header}>
      <Link exact to="/explore"><FcSearch /></Link>
      <div className={style.nav_items}>
        <Link exact to="/friends_invite"><FcInvite /></Link>
        <Link exact to="/upcoming"><FcCalendar /></Link>
        <Link exact to="/activity"><MdCircleNotifications /></Link>
        <Link exact to="/profile"><CgProfile /></Link>
      </div>
    </div>
  );
}
