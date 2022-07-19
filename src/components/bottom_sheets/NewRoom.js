import React, { useState } from "react";
import style from "../../style/roomDetail.module.css";
import { AiOutlineFile } from "react-icons/ai";
import { BsMicMuteFill, BsMicFill, BsFillFilePersonFill, BsFillPersonCheckFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegHandPeace, FaRegHandPaper } from "react-icons/fa"
import { Card } from "react-bootstrap";

export default function NewRoom(props) {
  const [micMuteVisible, setMicMuteVisible] = useState(true);
  const card = props.cardDetail;
  return (
    <>
      <div className={style.roomDetailContainer}>
        <div className={style.head}>
          <div className={"d-flex align-items-center"}>
            <a
              href="#"
              onClick={() => {
                props.setSheetVisible(false);
              }}
            >
              <IoIosArrowBack className={style.arrow_icon} />
            </a>
            <span>Hallway</span>
          </div>
          <div>
            <AiOutlineFile />
            <BsFillFilePersonFill className={style.person_icon} />
          </div>
        </div>
        <div className={style.roomDetailCard}>
          <div
            className="d-flex align-items-center justify-content-between flex-wrap"
            style={{ padding: "0.5em 1em" }}
          >
            {card.members.map((item)=> (
              <div className={style.memberContainer}>
                {micMuteVisible ? (
                  <div className={style.audio_icon}>
                    <BsMicMuteFill />
                  </div>
                ) : (
                  ""
                )}
                <BsFillPersonCheckFill className={style.personcheck_icon}/>
                <p>
                    <span>*</span>
                    {item.first_name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
