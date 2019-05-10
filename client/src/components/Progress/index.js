import React, { Component} from "react";
import "./style.css";

class Progress extends Component{
    constructor(props) {
        super(props);
        this.localState = {

        }
    }

    render() {
        return (
            <div>
                <progress value="22" max="100"></progress>
            </div>
        )
    }
}

export default Progress