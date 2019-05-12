import React, { Component} from "react";
import "./style.css";
import Loader from "../Input";

class Multilist extends Component{
    constructor(props) {
        super(props);
        this.localState = {

        }
    }
    render() {
        if (this.props.data) {
            return (
                <div>
                    {console.log(this.props.data)}

                    <p>{this.props.data.title.value}</p>
                    {this.props.data.options.map((option, index) => {
                        let id = "multilist_" + this.props.index;
                        return <div key={id + `_${index}`}>
                            <input id={id + `_${index}`} type="checkbox" name={id} value={option.title}/> <label htmlFor={id + `_${index}`}>{option.title}</label>
                        </div>
                    })}

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

export default Multilist