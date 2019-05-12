import React, { Component} from "react";
import "./style.css";
import Loader from "../Loader";

class Onelist extends Component{
    constructor(props) {
        super(props);
        this.localState = {

        }
    }

    render() {
        if (this.props.data) {
            return (
                <div>
                    <p>{this.props.data.title.value}</p>
                    {this.props.data.options.map((radio, index) => {
                        let id = "onelist_" + this.props.id;

                        if (radio.title === "Other") {
                            return (
                                <div key={id + `_${index}`}>
                                    <input id={id + `_${index}` + "_0"}
                                           type="radio"
                                           name={id}
                                           value={radio.title.toLowerCase()}
                                    />
                                    <label htmlFor={id + `_${index}` + "_0"}>
                                        {radio.title}
                                    </label>
                                    <input id={id + `_${index}` + "_1"}
                                           type="text"
                                           placeholder={radio.title}
                                    />
                                </div>
                            )
                        }
                        return (
                            <div key={id +  `_${index}`}>
                                <input id={id + `_${index}` + "_0"}
                                       type="radio"
                                       name={id}
                                       value={radio.title.toLowerCase()}
                                />
                                <label htmlFor={id + `_${index}` + "_0"}>
                                    {radio.title}
                                </label>
                            </div>
                        )
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

export default Onelist