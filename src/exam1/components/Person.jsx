
const colorText = {
    name: "black",
    age: "red",
    gender: "yellow"

};

function Person(props) {
    return (
        <div>
        <h3> - Name: <span style={{ color: colorText.name }}>{props.name}</span>,
            Age: <span style={{color: colorText.age}}>{props.age}</span>,
            Gender: <span style={{color: colorText.gender}}>{props.gender}</span>
        </h3>
        
        </div>
    )
}

export default Person