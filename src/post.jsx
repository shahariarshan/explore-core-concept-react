import { Component, useEffect, useState } from "react"
import PostItem from "./PostItem";
import './PostItem.css'

export default function Post (){
    const [posts,setPost] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data));
    },[])
    const postStyle ={
         
            border :'2px solid blue',
            margin:'20px',
            borderRadius: '15px',
            padding : '5px',
    }
    return (
        <div style={postStyle}>
            <h3>Post Item:{posts.length}</h3>
            {
                posts.map(post => <PostItem post={post}></PostItem>)
            }
        </div>
    )

}



// 1. state to hold data
// 2.useEffect with dependancy Array
// 3. use fetch to load data
// 4.ser loaded data to the state
// 5.display data on the Component