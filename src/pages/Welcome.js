import React from "react";
import style from "../style/welcome.module.css";
import { Link } from "react-router-dom";


function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome!</h1>
      <div className={style.WelcomeInfo}>
        <p>We're working hard to get clubhouse for everyone! while we wrap up the finishing touches, we're adding people gradually to make sure nothing breaks.</p>
        <p>Anyone can join with an invite from existing user - or reserve your usename and we'll text you if you have a friend on the app who can let you in. We are so grateful you're here and can't wait to have you join!</p>
        <p>Paul, Rohan & the Clubhouse team</p>
      </div>
      <div className={style.actionBtn}>
        <Link exact to="/get_username" className="primaryBtn d-flex align-items-center mb-3">
          Get your username{" "}
            {/* <img src="" alt="" /> */}
        </Link>
        <Link exact to="/invite">Have an invite text? Sign in</Link>
      </div>
    </div>
  );
}

export default Welcome;
