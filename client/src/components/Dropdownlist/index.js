import React, { Component} from "react";
import "./style.css";

class Dropdownlist extends Component{
    constructor(props) {
        super(props);
        this.localState = {

        }
    }

    render() {
        return (
            <div>
                <select multiple={false}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        )
    }
}

export default Dropdownlist