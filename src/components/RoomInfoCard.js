import React, { useState, useEffect } from "react";
import style from "../style/roomCard.module.css";
import data from "../data/roonCard.json";
import { BsChatDots, BsChatDotsFill, BsFillFilePersonFill, BsFillPersonFill,BsFilePerson } from "react-icons/bs";

export default function RoomInfoCard() {
  return (
    <>
      {data.map((item) => (
        <div>
          <div>
            <div className={style.roomCardContainer}>
              <h6>{item.title}</h6>
              <h2>{item.sub_titlle}</h2>
              <div className={style.roomMembers}>
                <div>
                  <BsFillFilePersonFill />
                  <BsFilePerson />
                </div>
                <div>
                  {item.members.map((item) => (
                    <p>
                      {item.first_name} {item.last_name} <BsChatDots />
                    </p>
                  ))}
                  <p className='d-flex align-items-center'>
                    <span className="me-2">1.8</span>
                    <BsFillPersonFill />
                    <span className="mx-2"></span>{" "}
                    <span className="me-2">5</span><BsChatDotsFill />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
