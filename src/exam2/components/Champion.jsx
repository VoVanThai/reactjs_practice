// Nhận các props name, cost, gender và hiển thị chúng theo màu sắc tương ứng

import { useState, useEffect } from "react"

export function Champion(props) {
    const [isClick, setIsClick] = useState(false)
    const [name, setName] = useState(props.name)
    const [nameColor, setNameColor] = useState()
    console.log(name)

    const onClick = () => {
        setIsClick(!isClick)
        // isClick ? setIsClick(false) : setIsClick(true)
    }

    const changeName = () => {
        if (name == props.name)
            setName(`Clicked ${props.name}`)
        else
            setName(props.name)
    }

    const sendData = () => {
        props.parentCallback(`Đã click vào ${props.name}`)
    }

    useEffect(() => {
        setNameColor('blue')
    },[])

    useEffect(() => {
        setNameColor(props.color)
    },[props.color])

    useEffect(() => {
        if(props.color === 'red')
            setNameColor('yellow')
    },[props.color])

    useEffect(() => {
        if (props.clickColor) 
            setNameColor(props.clickColor)      
    },[props.clickColor])



    return (
        <div style={{ backgroundColor: nameColor }}>
            <h3>- Name: <span style={{ color: props.clrName }}>{name}</span>,
                Cost: <span style={{ color: props.colorCost }}>{props.cost}</span>,
                Gender: <span style={{ color: props.colorGender }}>{props.gender}</span>,
                Color: {props.color}
            </h3>
            <button onClick={sendData}>Click me</button>
            <button onClick={changeName}>Change Name</button>
            <button className="square">X</button>
        </div>
    )
}


// import { useState, useEffect } from 'react';

// export default function ChampionPage() {

//   const [bkColor, setBKColor] = useState()

//   const onClick = () => {
//     setBKColor("purple")
//   }
  
//   return <div>
//     <Champion name="Garen" color="red" clickColor={bkColor}/>
//     <Champion name="Lux" color="yellow" clickColor={bkColor} />
//     <button onClick={onClick}>change color</button>
//     </div>
// }


// export function Champion(props) {
//   const [nameColor, setNameColor] = useState()

//   useEffect(() => {
//      setNameColor("blue")
//   }, [])

//   useEffect(() => {
//
//     if (props.color === 'red') {
//      setNameColor(props.color)      
//     }
//   }, [props.color])

//   useEffect(() => {
//     if (props.clickColor) {
//       setNameColor(props.clickColor)      
//     }
//   }, [props.clickColor])
  
//   return (
//     <div style={{ display: "flex", gap: 8, backgroundColor: nameColor, marginBottom: '4px' }}>
//       <h1>{props.name}</h1>
//       <h1>{props.color}</h1>
//     </div>
//   );
// }


