import React, { useState } from "react";
import style from "../../style/roomDetail.module.css";
import { AiOutlineFile } from "react-icons/ai";
import { BsMicMuteFill, BsFillFilePersonFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";

export default function NewRoom(props) {
  const [micMuteVisible, setMicMuteVisible] = useState(false);
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
            <BsFillFilePersonFill className={style.person_icon}/>
          </div>
        </div>
      </div>
    </>
  );
}
