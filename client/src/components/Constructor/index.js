import React, { Component} from "react";
import "./style.css";

import Input from "../Input";
import Dropdownlist from "../Dropdownlist";
import Multilist from "../Multilist";
import Onelist from "../Onelist";
import Progress from "../Progress";
import Textarea from "../Textarea";



class Constructor extends Component{
    constructor(props) {
        super(props);
        this.localState = {

        }
    }

    render() {
        const name = "Input";

        return (
            <div>constructor
                <div>{name}</div>
                <br/>
                <hr/>
                <br/>
                <Dropdownlist/>
                <br/>
                <hr/>
                <br/>
                <Input title={"Lable"} subtitle={"subtitle"} placeholder={"placeholder"}/>
                <br/>
                <hr/>
                <br/>
                <Multilist/>
                <br/>
                <hr/>
                <br/>
                <Onelist/>
                <br/>
                <hr/>
                <br/>
                <Progress/>
                <br/>
                <hr/>
                <br/>
                <Textarea/>
                <br/>
                <hr/>
                <br/>
            </div>
        )
    }
}

export default Constructor