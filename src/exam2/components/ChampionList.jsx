import { useState } from "react";
import { Champion } from "./Champion";

// Dùng để hiển thị thông tin của nhiều champion
export function ChampionList(props) {
    console.log("List", props)
    console.log("=========ChampionLiist====", props.bg)
    console.log("ChampionLisr Name", props.clrName)
    return (

        <div>
            {props.champions.map(champion => <Champion clickColor={props.clickColor} bgChamp={props.bgChamp} parentCallback={props.parentCallback} colorGender={props.colorGender} colorCost={props.colorCost} clrName={props.clrName} bg={props.bg} name={champion.name} cost={champion.cost} gender={champion.gender} color={champion.color} />)}
        </div>
    )
}