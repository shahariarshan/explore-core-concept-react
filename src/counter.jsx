import { useState } from "react"

export default function Counter (){
    const [set,setCount] =useState(0);
    // console.log(abc)
    const handelAdd = () => {
        const newSet = set + 1;
        setCount(newSet);
    }
    const handelReduce =() => {
        const newCount  = set - 1;
        setCount(newCount);

    }
    return (
        <div style={{border:'2px solid red'}}>
            
            <h3>Counter:{set}</h3>
            <button onClick={handelAdd}>Add</button>
            <button onClick={handelReduce}>Reduce</button>
        </div>
    )
}