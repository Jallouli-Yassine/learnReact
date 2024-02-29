
import './App.css'
import Header from './components/Header'
import CounterC from './components/CounterC'
import CounterF from './components/CounterF'
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0)
  let students = [
    {id:"1", name: 'BIGJ1', age: 23 },
    {id:"2", name: 'jmal', age: 23 },
    {id:"3", name: 'jerby', age: 23 },
  ]
  let person = {
    name: 'BIGJ1',
    age: 23,
  }

  let show = (name) => { return name }
  const style1={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"green",
    backgroundColor:"yellow",
    borderRadius:"100px",
    width:"500px",
    height:"100px"
  }
  const sum = (a, b) => { alert(a + b) }
  const [afficher,setShow] = useState(false)
  const handleClick = (dehe) => {
    alert("ahlaa bik")
  }

  let test = false;
  return (
      <>
        <button onClick={()=>setShow(!afficher)}>afficher componenet</button>

        <Header name="test" age={24} p={person}/>
        <h1 style={style1}>liiistaaa</h1>
        <ul>
          {
            students.map((p, index) => {
              return <li key={p.id}> {p.name} - {p.age} </li>
            })
          }
        </ul>

        <h2>nom : {show(person.name)} </h2>
        <h2>age : {person.age} </h2>

        <button onClick={handleClick}>click me</button>
        <button onClick={() => sum(1, 2)}>click for sum</button>

        {
          test ? <h1>true</h1>
              :
              <h1>false</h1>

        }
        {
            !test && <h1>is not true</h1>
        }


        <CounterC propsName={test}/>
        <br/>
        *******************************<br/>
        {
            afficher && <CounterF name={name}/>
        }

      </>
  )
}

export default App
