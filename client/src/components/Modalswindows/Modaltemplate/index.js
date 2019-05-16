import React, { Component } from "react";
import "./style.css";

class Modaltemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // show: this.props.show ? "modal__template_show" : ""
            title: undefined,
            subtitle: undefined
        };
        this.handleSend = this.handleSend.bind(this);
    }

    handleSend() {
        console.log("handleSend", this.state.title);
    }

    // componentDidMount() {
    //     this.setState(state => ({
    //         show: this.props.show ? "modal__template_show" : ""
    //     }));
    //     console.log(this.state.show);
    //     console.log(this.props.show);
    // }

    render() {
        //let show = this.state.show ? "modal__template_show" : "" ;

        return (
            <div className={"modal__template_menu " + this.state.show}>
                <div className="modal__template_container">
                    <div className="modal__template_header">
                        <div>
                            Input
                        </div>
                        <div>
                            x
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="fname">First Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="lname">Last Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="country">Country</label>
                            </div>
                            <div className="col-75">
                                <select id="country" name="country">
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="subject">Subject</label>
                            </div>
                            <div className="col-75">
                                {/*<textarea id="subject" name="subject" placeholder="Write something.." style={"height:200px"}/>*/}
                                <textarea id="subject" name="subject" placeholder="Write something.."/>
                            </div>
                        </div>
                        {this.props.children}
                        <div className="row" >
                            <button onClick={this.props.handleSend}>Submit</button>
                            {/*<input type="submit" value="Submit"/>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modaltemplate