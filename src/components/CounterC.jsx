import { Component } from "react";

class CounterC extends Component {
    /*

Execution Order:

Constructor
(Optional) getDerivedStateFromProps
Render
componentDidMount

    */
    constructor(props) {
        super(props);
        console.log("i'm the constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("i'm the getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log("i'm the didMount")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("i'm the didUpdate")
    }

    //nekho etat actuelle mta haja kbal matsir maj
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("i'm the getSnapshotBeforeUpdate")
        return null;
    }

    //bloki appel ta api lena
    shouldComponentUpdate(nextProps, nextState) {
        console.log("i'm the shouldComponentUpdate")
        return  true //this.state.count <= 3;
    }

    state = {
        count: 0,
        student: {
            name: "BIGJ",
            age: 23,
            id: "1"
        },
        test: this.props.propsName
    };
    increment = () => {
            this.setState({ count: this.state.count + 1 });
        this.setState({ student: { ...this.state.student, name: "Yassine" } });

    }
    decrement = () => {
        if (this.state.count > 0 )
            this.setState({ count: this.state.count - 1, student: { name: "Yosr" } });
    }
    render() {
        console.log(this.state)
        return (

            <>
                <h1>Class COMPONENT </h1>
                <button onClick={this.increment}>Increment</button>
                <p>
                    {this.state.count}

                </p>
                <button onClick={this.decrement}>Decrement</button>

                {
                    [...Array(this.state.count)].map((item, index) => {
                        return <Cell count={index} key={index}/>
                    })
                }
                {this.state.student.name}
            </>
        )
    }
}

export default CounterC;

class Cell extends Component {
    constructor(props) {
        super(props);
        console.log("i'm the constructor")
    }
    componentWillUnmount()
    {
        console.log("component unmounted ");
    }
    render() {
        return <h3>{this.props.count}</h3>
    }
}