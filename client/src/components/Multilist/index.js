import React, { Component} from "react";
import "./style1.css";
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
                    <ul>
                        {this.props.data.options.map((option, index) => {
                            let id = "multilist_" + this.props.index;
                            return <li key={id + `_${index}`}>
                                <label>
                                    {/*<input id={id + `_${index}`} type="checkbox" name={id} value={option.title}/>*/}
                                    <input type="checkbox" name={id} value={option.title}/>
                                    <span className={"icon"}></span>
                                    <span className={"list"}>{option.title}</span>
                                </label>
                            </li>
                        })}
                    </ul>
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