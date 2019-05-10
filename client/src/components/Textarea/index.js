import React, { Component} from "react";
import "./style.css";

class Textarea extends Component{
    constructor(props) {
        super(props);
        this.localState = {

        }
    }

    render() {
        return (
            <div>
                <div><label htmlFor="label2">Label</label></div>
                <div><small><label htmlFor="label2">Label</label></small></div>
                <div><textarea name="msg" id="label2" cols="30" rows="10" placeholder="Input text"/></div>
            </div>
        )
    }
}

export default Textarea