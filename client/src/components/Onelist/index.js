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
            const Subtitle = this.props.data.subtitle.value ?
                (props) => {return (<div className={"one__list_subtitle"}>{props.data}</div>)}  :
                (props) => {console.warn("warn", props);
                    return ""};

            return (
                <div>
                    <div className={"one__list_title"}>{this.props.data.title.value}</div>
                    {<Subtitle data={this.props.data.subtitle.value}/>}
                    <div className={"one__list_radio_box"}>
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
                                        <div className="one__list_radio_input_text_box">
                                            <input id={id + `_${index}` + "_1"}
                                                   type="text"
                                                   className={"one__list_radio_input_text"}
                                                   placeholder={radio.title}
                                            />
                                        </div>

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