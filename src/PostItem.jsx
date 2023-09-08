

export default function PostItem ({post}){
    // console.log(post)
    const {id,userId,title,body} =post;
    return (
        <div className='PostItem'>
            <h5>Id:<small>{id}</small></h5>
            <h5>User Id:{userId}</h5>
            <p>Title:{title}</p>
            <p>Body:<small>{body}</small></p>
            
        </div>
    )
}