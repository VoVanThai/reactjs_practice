import Person from "./Person";

function People(props) {
    return (
        <div>
            {props.people.map(person => <Person name={person.name} age={person.age} gender={person.gender} />)}
        </div>
    )
}

export default People