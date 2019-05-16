import React, { Component} from "react";
import "./style.css";
// import Dropdownlist from "../Constructor";
// import { connect } from "react-redux";

// import Modaltemplate from "../Modalswindows/Modaltemplate";
// import Input from "../Input";
// import Dropdownlist from "../Dropdownlist";
// import Multilist from "../Multilist";
// import Onelist from "../Onelist";
// import Progress from "../Progress";
// import Textarea from "../Textarea";

class Adder extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            surveyInfo: props.surveyInfo
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleShow() {
        return this.props.addElement(
            {
                index: 3,
                data: {
                    type: "Onelist",
                    data: {
                        options: [
                            {id: new Date(), title: "Male"},
                            {id: new Date(), title: "FeMale"},
                            {id: new Date(), title: "Other"}
                        ],
                        title: {value: "Title", styles: {}},
                        subtitle: {value: "subtitle", styles: {}},
                        styles: {}
                    }
            }
        });
    }

    handleClick() {
        // setInterval(() => {
        //     console.log(this.props.surveyInfo)
        // }, 2000);
        console.log(this.props.surveyInfo);
    }

    componentDidMount() {
        console.log("adder born");
    }

    render() {
        // if (this.props.stateComponents) {
            return (
                <>
                    <div className="adder-wrapper">
                        <div className="adder-component">
                            <button onClick={this.handleShow}>
                                Input
                            </button>
                        </div>
                        <div className="adder-component">
                            <button onClick={this.handleShow}>
                                Textarea
                            </button>
                        </div>
                        <div className="adder-component">
                            <button onClick={this.handleShow}>
                                List
                            </button>
                        </div>
                        <div className="adder-component">
                            <button onClick={this.handleShow}>
                                Multilist
                            </button>
                        </div>
                        <div className="adder-component">
                            <button onClick={this.handleShow}>
                                Progress
                            </button>
                        </div>
                        <div className="adder-component">
                            <button onClick={this.handleShow}>
                                Drop-down list
                            </button>
                        </div>
                        <button onClick={this.handleClick}>
                            button
                        </button>
                        {/*{console.log("check connect", this.props.stateComponents)}*/}
                    </div>
                    {/*<Modaltemplate show={this.state.showModal} >modal template</Modaltemplate>*/}
                    {/*{this.state.surveyInfo.components.map((component, index) => {*/}
                        {/*switch (component.type) {*/}
                            {/*case "Dropdownlist":*/}
                                {/*return <Dropdownlist data={ component.data } index={index} key={index}/>;*/}
                            {/*case "Input":*/}
                                {/*return <Input data={ component.data } index={index} key={index}/>;*/}
                            {/*case "Multilist":*/}
                                {/*return <Multilist data={ component.data } index={index} key={index}/>;*/}
                            {/*case "Onelist":*/}
                                {/*return <Onelist data={ component.data } index={index} key={index}/>;*/}
                            {/*case "Progress":*/}
                                {/*return <Progress data={ component.data } index={index} key={index}/>;*/}
                            {/*case "Textarea":*/}
                                {/*return <Textarea data={ component.data } index={index} key={index}/>;*/}
                            {/*default:*/}
                                {/*return console.warn(`component with type ${component.type} not found`);*/}
                        {/*}*/}
                    {/*})}*/}
                </>
            )
    //     } else {
    //         return (
    //             <div>
    //                 load
    //             </div>
    //         )
    //     }

    }
}

// function mapStateToProps(state) {
//     return {
//         stateComponents: state.surveyInfo.stateComponents
//     }
// }

export default Adder