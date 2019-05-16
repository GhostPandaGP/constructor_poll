import React, { Component} from "react";
import "./style.css";

import Adder from "../Adder";
import Input from "../Input";
import Dropdownlist from "../Dropdownlist";
import Multilist from "../Multilist";
import Onelist from "../Onelist";
import Progress from "../Progress";
import Textarea from "../Textarea";

import addElement from "../../actions/addObject";

import { connect } from "react-redux";



class Constructor extends Component{
    // componentWillReceiveProps(nextProps){
    //     // update the state with the new props
    //     this.setState({
    //         stateComponents: nextProps.surveyInfo.stateComponents
    //     });
    // }

    render() {
        if (this.props.stateComponents.components) {
            return (
                <div className={"constructor_wrapper"}>
                    {this.props.stateComponents.components.map((component, index) => {
                        switch (component.type) {
                            case "Dropdownlist":
                                return <Dropdownlist data={ component.data } index={index} key={index}/>;
                            case "Input":
                                return <Input data={ component.data } index={index} key={index}/>;
                            case "Multilist":
                                return <Multilist data={ component.data } index={index} key={index}/>;
                            case "Onelist":
                                return <Onelist data={ component.data } index={index} key={index}/>;
                            case "Progress":
                                return <Progress data={ component.data } index={index} key={index}/>;
                            case "Textarea":
                                return <Textarea data={ component.data } index={index} key={index}/>;
                            default:
                                return console.warn(`component with type ${component.type} not found`);
                        }
                    })}
                    <br/>
                    <hr/>
                    {this.props.stateComponents.components[this.props.stateComponents.components.length - 1].data.title.value}
                    {console.log("constructor components", this.props.stateComponents.components)}
                    <br/>
                    <Adder addElement = {this.props.addElementFunction} surveyInfo = {this.props.stateComponents}/>
                    {console.log("add", this.props.stateComponents)}
                </div>
            )
        } else {
            return (<div>
                load
            </div>)
        }

    }
}

function mapStateToProps(state) {
    return {
        stateComponents: state.surveyInfo.stateComponents
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addElementFunction: element => {
            dispatch(addElement(element))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Constructor)