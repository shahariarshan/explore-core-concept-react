import { useState } from "react"

export default function Team(){
    const [team,setTeam]= useState(11)
    const handelClickAdd =() =>{
        const newMember = team + 1;
        setTeam(newMember)
    }
    const removePlayer =() =>{
        // const removeMembers =team - 1;
        // setTeam(removeMembers)
        setTeam(team - 1);
    }


    const teamStyle ={
        border :'2px solid blue',
        margin:'20px',
        borderRadius: '15px',
        padding : '5px',

    }
    return (
        <div style={teamStyle}>
            <h3>Players:{team} </h3>
            <button onClick={handelClickAdd}>Add Member </button>
            <button onClick={removePlayer}>Remove Member </button>
        </div>
    )
}