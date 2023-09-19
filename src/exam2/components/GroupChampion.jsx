import { useState } from "react";
import { ChampionList } from "./ChampionList";

// Dùng để show danh sách champion theo vai trò

export function GroupChampion(props) {
    console.log('Group',props.colorGender)
   console.log(props)
    return (
        <div>
        <h2>Role: {props.role}</h2>
        <ChampionList clickColor={props.clickColor} bgChamp={props.bgChamp} parentCallback={props.parentCallback} colorGender={props.colorGender} colorCost={props.colorCost} clrName={props.clr} bg={props.bg} champions={props.champions} />
        </div>
    )
}