import React, { useState, useEffect } from 'react'
import style from "../style/roomCard.module.css"
import data from "../data/roonCard.json"

export default function RoomInfoCard() {
  return (
    <>
    {data.map((item) => (
        <div>
            <div>
                <div className={style.roomCardContainer}>
                    <h6>{item.title}</h6>
                    <h2>{item.sub_titlle}</h2>
                </div>
            </div>
        </div>
    ))}
    </>
  )
}
