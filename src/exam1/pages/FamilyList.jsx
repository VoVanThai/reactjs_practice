import Family from "../components/Family";

function FamilyList() {
    return (
        <div>
        <Family title="Chu Ut" people={[{name: "Thai", age: "21", gender:"male"}, {name:"Binh", age:"18", gender:"femle"}, {name:"Duyen", age:"15", gender:"female"} ]} />

        <Family title="Bac Tam" people={[{name: "Hieu", age: "30", gender:"male"}, {name: "Tung", age: "26", gender: "male"}, {name: "Tin", age: "15", gender: "male"}]} />
        </div>
        )
}

export default FamilyList