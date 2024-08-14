// просто делай компоненты ежжи
import React from "react";

class ClassCounter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }

        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
    }

    add(){
        this.setState({count: this.state.count + 1})
    }

    subtract(){
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div className="card">
            <p>count is {this.state.count}</p>
            <button onClick={this.add}>
            отдать
            </button>
            <button onClick={this.subtract}>
            спиздить
            </button>
        </div>
        )
    }
}

export default ClassCounter;