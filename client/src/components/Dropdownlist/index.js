import React, { Component} from "react";
import "./style.css";
import Loader from "../Loader";

class Dropdownlist extends Component{
    constructor(props) {
        super(props);
        this.localState = {

        }
    }

    render() {
        if (this.props.data) {
            const Subtitle = this.props.data.subtitle.value ?
                (props) => {return (<div>{props.data}</div>)}  :
                (props) => {console.warn("warn", props);
                            return ""};

            return (
                <div>
                    {console.log(this.props.data)}
                    <p>{this.props.data.title.value}</p>
                    {<Subtitle data={this.props.data.subtitle.value}/>}
                    <select multiple={false}>
                        {this.props.data.options.map((option, index) => {
                            let id = "dropdownlist_" + this.props.index + `_${index}`;
                            return <option value={option.title} key={id}>{option.title}</option>
                        })}
                    </select>
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

export default Dropdownlist