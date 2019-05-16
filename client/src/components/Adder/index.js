import React, { Component} from "react";
import "./style.css";
import { connect } from "react-redux";

import Modaltemplate from "../Modalswindows/Modaltemplate";

class Adder extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
        this.setState(state => ({
            showModal: true
        }));
    }

    render() {
        if (this.props.stateComponents) {
            return (
                <>
                    <div className="adder-wrapper">
                        <div className="adder-component">
                            <button onClick={this.handleShow}>
                                Input
                            </button>
                        </div>
                        <div className="adder-component">Textarea</div>
                        <div className="adder-component">List</div>
                        <div className="adder-component">Multilist</div>
                        <div className="adder-component">Progress</div>
                        <div className="adder-component">Drop-down list</div>
                        {console.log("check connect", this.props.stateComponents)}
                    </div>
                    <Modaltemplate show={this.state.showModal}>modal template</Modaltemplate>
                </>
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