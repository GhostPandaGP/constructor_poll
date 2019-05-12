import React, { Component} from "react";
import "./style.css";
import Loader from "../Loader";

class Input extends Component{
    constructor(props) {
        super(props);
        this.state = {
            options: undefined
        }
    }

    componentDidMount() {
        // this.setState(
        //     state => ({
        //         options: this.props.data
        //     })
        // );
        // console.log("component set", this.state.options);
    }

    componentWillMount() {
        // if (this.props.data) {
        //     this.setState(
        //         state => ({
        //             options: this.props.data
        //         })
        //     );
        //     console.log("data input before updating", this.state.options);
        // } else {
        //     console.log("data is underfined");
        // }
        // console.log("update");
    }

    render() {
        console.log("input - ", this.props.data);
        if (this.props.data) {
            const data = this.props.data;
            const id = "input_" + this.props.index;
            return (
                <div>
                    {console.log("input - true - ", this.props.data)}
                    <div><label htmlFor={id}>{data.title.value}</label></div>
                    <div><small><label htmlFor={id}>{data.subtitle.value}</label></small></div>
                    <div><input id={id} type="text" placeholder={data.options.placeholder}/></div>
                </div>
            )
        } else {
            return (
                <div>
                    <Loader/>
                </div>
            )
        }
    }
}

export default Input