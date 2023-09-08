
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './usersEffect'
import Post from './post'
import PostItem from './PostItem'

function App() {

  function handelClick (){
    alert('clicked in the button')
  }
  const handelClick2 = () => {
    alert('clicked on second button')
  }
  // using perameter inside a function 
  const perameterUsed =(num) => {
    alert('num+ 5')
  }
 
  return ( 
    <>
     
      <h3> React core concept</h3>
      <Users></Users>
      <Post></Post>
      <Team></Team>

    
      <Counter></Counter>
      <button onClick={handelClick}>Click me</button>
      <button onClick={handelClick2}>Click me</button>
      <button onClick={() => {alert('clicked third')}}>Click me 3</button>
      <button onClick={() => perameterUsed(3)}>Click me</button>

     
      
    </>
  )
}

export default App
