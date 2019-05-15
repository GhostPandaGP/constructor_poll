import React, { Component} from "react";
import "./style.css";

import { connect } from "react-redux";

class Adder extends Component{
    constructor(props) {
        super(props);
        this.localState = {

        }
    }

    render() {
        if (this.props.stateComponents) {
            return (
                <div className="adder-wrapper">
                    <div className="adder-component" >Input</div>
                    <div className="adder-component">Textarea</div>
                    <div className="adder-component">List</div>
                    <div className="adder-component">Multilist</div>
                    <div className="adder-component">Progress</div>
                    <div className="adder-component">Drop-down list</div>
                    {console.log("check connect", this.props.stateComponents)}
                </div>
            )
        } else {
            return (
                <div>
                    load
                </div>
            )
        }

    }
}

function mapStateToProps(state) {
    return {
        stateComponents: state.surveyInfo.stateComponents
    }
}

export default connect(mapStateToProps)(Adder)