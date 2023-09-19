import { useState } from "react";
import { GroupChampion } from "../components/GroupChampion";

export function ChampionPage() {
    const [isClick, setIsClick] = useState(false)
    const [isClickName, setIsClickName] = useState(false)
    const [isClickCost, setIsClickCost] = useState(false)
    const [isClickGender, setIsClickGender] = useState(false)
    const [message, setMessage] = useState('')
    const [isClickButton, setIsClickButton] = useState(false)
    const [bgColor, setBgColor] = useState()

    const onClick = () => {
        setIsClick(!isClick)
    }

    const onClickButton = () => {
        setIsClickButton(!isClickButton)
    }

    const onClickName = () => {
        setIsClickName(!isClickName)
    }

    const onClickCost = () => {
        setIsClickCost(!isClickCost)
    }

    const onClickGender = () => {
        setIsClickGender(!isClickGender)
        console.log('clicked')
    }

    const callbackFunction = (childData) => {
        setMessage(childData)
    }

    console.log(`mess=============`,message)

    const onClickColor = () => {
        setBgColor('purple')
    }

    return(
        <div >
        <GroupChampion clickColor={bgColor} bgChamp={isClickButton ? 'green' : undefined} parentCallback={callbackFunction} colorGender={isClickGender ? 'red' : undefined} colorCost={isClickCost ? 'purple' : undefined} clr={isClickName ? 'green' :undefined} bg={isClick ? 'yellow' : undefined} role="Tank" champions={[{name: "Garen", cost: "450", gender: "male", color:'red'}, {name: "Sion", cost: "1350", gender: "male", color:'orange'}]} />
        <GroupChampion clickColor={bgColor} bgChamp={isClickButton ? 'green' : undefined} parentCallback={callbackFunction} colorGender={isClickGender ? 'red' : undefined} colorCost={isClickCost ? 'purple' : undefined} clr={isClickName ? 'green' :undefined} bg={isClick ? 'yellow' : undefined} role="Mage" champions={[{name: "Ahri", cost: "6300", gender: "female", color:'green'}, {name: "Lux", cost: "4800", gender: "female", color:'yellow'}]} />
        <br/>
        <button onClick={onClickName}>Change Color Name</button>
        <button onClick={onClickCost}>Change Color Cost</button>
        <button onClick={onClickGender}>Change Color Gender</button>
        <br/>
        <button onClick={onClick}>Change Color</button>
        <br/>
        <h2>{message}</h2>
        <button onClick={onClickButton}>Change color</button>
        <button onClick={onClickColor}>Click</button>
        </div>
    )
}