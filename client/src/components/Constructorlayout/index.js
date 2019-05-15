import React, { Component} from "react";
import "./style.css";
import Loader from "../Input";

class Constructorlayout extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        if (true) {
            return (
                <>
                    <nav className={"constructor__layout_nav"}>
                        <input type="checkbox" id={"chk"}/>
                        <label htmlFor="chk" className={"constructor__layout_show-menu-btn"}>
                            <i className="fas fa-ellipsis-h"></i>
                        </label>
                        <ul className={"constructor__layout_menu"}>
                            <li className={"constructor__layout_menu_element"}>
                                <a href="#">Survey</a>
                            </li>
                            <li className={"constructor__layout_menu_element"}>
                                <a href="#">Options</a>
                            </li>
                            <li className={"constructor__layout_menu_element"}>
                                <a href="#">Result</a>
                            </li>
                            <label htmlFor="chk" className={"constructor__layout_hide-menu-btn"}>
                                <i className={"fas fa-times"}> </i>
                            </label>
                        </ul>
                    </nav>
                    <main className={"constructor__layout_wrapper_main"}>
                        <div className="constructor__layout_wrapper">
                            {this.props.main}
                        </div>
                    </main>
                </>
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

export default Constructorlayout