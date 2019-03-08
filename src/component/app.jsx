import React, { Component } from "react";

class App extends Component {
    constructor(){
        super();
        this.state={
            count: 0
        }
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>My React App! {this.state.count}</h1>
            </div>
        );
    }
}

export default App;