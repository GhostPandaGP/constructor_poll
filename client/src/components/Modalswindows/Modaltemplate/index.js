import React, { Component } from "react";
import "./style.css";

class Modaltemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show
        }
    }

    componentWillMount() {
        this.setState(state => ({
            show: state.show ? "modal__template_show" : ""
        }));
    }

    render() {
        //let show = this.state.show ? "modal__template_show" : "" ;

        return(
            <div className={"modal__template_menu " + this.state.show}>
                {this.props.children}
            </div>
        )
    }
}

export default Modaltemplate