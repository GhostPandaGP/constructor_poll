import React, { Component} from "react";
import "./style.css";

class Onelist extends Component{
    constructor(props) {
        super(props);
        this.localState = {

        }
    }

    render() {
        return (
            <div>
                <input type="radio" name="gender" value="male"/> <label htmlFor="">Male</label>    <br/>
                    <input type="radio" name="gender" value="female"/> <label htmlFor="">FeMale</label> <br/>
                        <input type="radio" name="gender" value="other"/> <label htmlFor="">Other</label>
            </div>
        )
    }
}

export default Onelist