import {useEffect, useState} from "react"

export default function CounterF({name})
{
    const [count, setCount] = useState(0)
    const [prenom, setPrenom] = useState("Fred")
    useEffect(() => {
        console.log("effect")
    }, [count]) //mara bark execution ken ki tsir instrucrtion al count
    /*

     useEffect(() => {
         console.log("effect")
     }, []) //simule component didmount : mara bark execution khater zedna []


         useEffect(() => {
             console.log("effect")
         }) //edhy dima tetawd ala ay execution ala ay haja
     */
    return (
        <>
            <h1>Function COMPONENT </h1>
            <button onClick={() => setCount(count + 1)}> increment</button>
            <p>{count} {name}</p>
            <button onClick={() => setCount(count - 1)}> decrement</button>
        </>
    );
}