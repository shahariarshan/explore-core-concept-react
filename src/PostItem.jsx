export default function PostItem (post){
    // console.log(post)
    const {userId,title} =post;
    return (
        <div>
            <h5>Id:{userId}</h5>
            <p>Title:{title}</p>
            
        </div>
    )
}