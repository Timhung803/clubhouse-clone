import React from 'react'
import style from "../style/phoneConfirm.module.css";
import { Link } from "react-router-dom"
import { BsHandIndexThumb } from "react-icons/bs";

export default function AllowNotification() {
    return (
      <div className={style.phoneConfirmContainer}>
        <div className='text-center'>
            <h1 className='mb-4'>Last, important step!</h1>
            <h1 className='mb-3'>Enable notificaton to know when people are talking</h1>
            <div className={style.notificationContainer}>
                <div className='p-3'>
                    <h3>"Clubhouse" Would Like to Send You Notification</h3>
                    <p>Notification may include alerts, sounds and icon badges</p>
                </div>
                <div className={style.action_btn}>
                    <Link exact to="/">Don't Allow</Link>
                    <Link exact to="/">Allow</Link>
                    <BsHandIndexThumb className={style.hand_icon}/>
                </div>
            </div>
        </div>
      </div>
    )
  }