import React, { Component} from "react";
import "./style.css";

import Adder from "../Adder";
import Input from "../Input";
import Dropdownlist from "../Dropdownlist";
import Multilist from "../Multilist";
import Onelist from "../Onelist";
import Progress from "../Progress";
import Textarea from "../Textarea";



class Constructor extends Component{
    constructor(props) {
        super(props);
        this.localState = {
            stateComponents: {
                components: [
                    {
                        type: "Dropdownlist",
                        data: {
                            options: [
                                {id: new Date(), title: "Title1"},
                                {id: new Date(), title: "Title2"},
                                {id: new Date(), title: "Title3"},
                                {id: new Date(), title: "Title4"}
                            ],
                            title: {value: "Title", style: {}},
                            subtitle: {value: "subtitle", style: {}},
                            styles: {}
                        }
                    },
                    {
                        type: "Input",
                        data: {
                            options: {
                                    placeholder: "Input your value",
                            },
                            title: {value: "Label", style: {}},
                            subtitle: {value: "subtitle", style: {}},
                            condition: {},
                            styles: {}
                        }
                    },
                    {
                        type: "Multilist",
                        data: {
                            options: [
                                {id: new Date(), title: "Title1"},
                                {id: new Date(), title: "Title2"},
                                {id: new Date(), title: "Title3"},
                                {id: new Date(), title: "Title4"}
                            ],
                            title: {value: "Title", style: {}},
                            subtitle: {value: "subtitle", style: {}},
                            styles: {}
                        }
                    },
                    {
                        type: "Progress",
                        data: {
                            options: {
                                start: 1,
                                end: 10,
                            },
                            title: {value: "Progress bar?", style: {}},
                            subtitle: {value: "subtitle", style: {}},
                            styles: {}
                        }
                    },
                    {
                        type: "Onelist",
                        data: {
                            options: [
                                {id: new Date(), title: "Male"},
                                {id: new Date(), title: "FeMale"},
                                {id: new Date(), title: "Other"}
                            ],
                            title: {value: "Title", style: {}},
                            subtitle: {value: "subtitle", style: {}},
                            styles: {}
                        }
                    },
                    {
                        type: "Textarea",
                        data: {
                            options: {
                                placeholder: "Input your value",
                                rows: 10,
                                cols: 40
                            },
                            title: {value: "Label", style: {}},
                            subtitle: {value: "subtitle", style: {}},
                            condition: {},
                            styles: {}
                        }
                    },
                    {
                        type: "Progress",
                        data: {
                            options: {
                                start: 1,
                                end: 10,
                            },
                            title: {value: "Progress bar?", style: {}},
                            subtitle: {value: "subtitle", style: {}},
                            styles: {}
                        }
                    },
                    {
                        type: "Progress",
                        data: {
                            options: {
                                start: 1,
                                end: 10,
                            },
                            title: {value: "Progress bar?", style: {}},
                            subtitle: {value: "subtitle", style: {}},
                            styles: {}
                        }
                    },
                    {
                        type: "Progress",
                        data: {
                            options: {
                                start: 1,
                                end: 10,
                            },
                            title: {value: "Progress bar?", style: {}},
                            subtitle: {value: "subtitle", style: {}},
                            styles: {}
                        }
                    },
                    {
                        type: "Progress",
                        data: {
                            options: {
                                start: 1,
                                end: 10,
                            },
                            title: {value: "Progress bar?", style: {}},
                            subtitle: {value: "subtitle", style: {}},
                            styles: {}
                        }
                    },
                ],
                style: {}
            }
        };
    }

    render() {
        return (
            <div>
                {this.localState.stateComponents.components.map((component, index) => {
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
                <br/>
                <Adder/>
            </div>
        )
    }
}

export default Constructor