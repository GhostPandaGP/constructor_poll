import React, { Component} from "react";
import "./style.css";
import Loader from "../Input";

class Textarea extends Component{
    constructor(props) {
        super(props);
        this.localState = {

        }
    }

    render() {
        console.log("textarea - ", this.props.data);
        if (this.props.data) {
            const data = this.props.data;
            const id = "textarea_" + this.props.index;
            return (
                <div>
                    {console.log("textarea - true - ", this.props.data)}
                    <div><label htmlFor={id}>{data.title.value}</label></div>
                    <div><small><label htmlFor={id}>{data.subtitle.value}</label></small></div>
                    <div><textarea className={"textarea_textarea"} id={id} type="text" name={id} cols={data.options.cols} rows={data.options.rows} placeholder={data.options.placeholder}/></div>
                </div>
            )
        } else {
            return (
                <div>
                    <Loader/>
                </div>
            )
        }
        // return (
        //     <div>
        //         <div><label htmlFor="label2">Label</label></div>
        //         <div><small><label htmlFor="label2">Label</label></small></div>
        //         <div><textarea name="msg" id="label2" cols="30" rows="10" placeholder="Input text"/></div>
        //     </div>
        // )
    }
}

export default Textarea