import React, { Component} from "react";
import "./style.css";
import Loader from "../Loader";

class Progress extends Component{
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

            const id = "progress_" + this.props.index;

            let arr = [];

            let k = 0;
            for (let i = this.props.data.options.end; i >= this.props.data.options.start; i--,  k++) {
                arr[k] = i;
            }

            return (
                <div className="progress">
                    <div className="progress_box">
                        <p>{this.props.data.title.value}</p>
                        {<Subtitle data={this.props.data.subtitle.value}/>}
                        <div className={"progress_rating"}>
                            {arr.map((value, index) => {
                                return [
                                    <input type="radio"
                                           name={id}
                                           id={id + `_${index}`}
                                           key={id + "_0"}
                                    />,
                                    <label htmlFor={id + `_${index}`}
                                           key={id + "_1"}>
                                        {value}
                                    </label>
                                ]
                            }) }
                        </div>
                    </div>
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

export default Progress