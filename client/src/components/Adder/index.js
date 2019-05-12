import React, { Component} from "react";
import "./style.css";

class Adder extends Component{
    constructor(props) {
        super(props);
        this.localState = {

        }
    }

    render() {
          return (
            <div className="adder-wrapper">
                <div className="adder-component" >Input</div>
                <div className="adder-component">Textarea</div>
                <div className="adder-component">List</div>
                <div className="adder-component">Multilist</div>
                <div className="adder-component">Progress</div>
                <div className="adder-component">Drop-down list</div>
            </div>
        )
    }
}

export default Adder