import { Component } from "react";
/*
export default class Header extends Component {
    render() {
        return (
                <h1>CLASS COMPONENT</h1>
        )
    }
    
}
*/
//rfce
export default function Header(props){
    console.log(props)
        return (
            <>
                <h1>Function COMPONENT </h1>
                <h1>age : {props.age}</h1>
            </>
      
        )
        
}
