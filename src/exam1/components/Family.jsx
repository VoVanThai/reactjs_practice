import People from "./People";

function Family(props) {
    return (
        <div>
            <h2>Gia dinh {props.title}</h2>
            <People people={props.people} />
        </div>
    )
}

export default Family