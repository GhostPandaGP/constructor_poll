const initialState = {
    stateComponents: {
        components: [
            {
                type: "Dropdownlist",
                data: {
                    options: {
                        elements: [
                            {id: new Date(), title: "Title1"},
                            {id: new Date(), title: "Title2"},
                            {id: new Date(), title: "Title3"},
                            {id: new Date(), title: "Title4"}
                        ]
                    },
                    title: {value: "Title", styles: {}},
                    subtitle: {value: "subtitle", styles: {}},
                    styles: {}
                }
            },
            {
                type: "Input",
                data: {
                    options: {
                        placeholder: "Input your value",
                    },
                    title: {value: "Label", styles: {}},
                    subtitle: {value: "subtitle", styles: {}},
                    condition: {},
                    styles: {}
                }
            },
            {
                type: "Multilist",
                data: {
                    options: {
                        elements: [
                            {id: new Date(), title: "Title1"},
                            {id: new Date(), title: "Title2"},
                            {id: new Date(), title: "Title3"},
                            {id: new Date(), title: "Title4"}
                        ]
                    },
                    title: {value: "Title", styles: {}},
                    subtitle: {value: "subtitle", styles: {}},
                    styles: {
                        type: "consent"
                    }
                }
            },
            {
                type: "Multilist",
                data: {
                    options: {
                        elements: [
                            {id: new Date(), title: "Title1"},
                            {id: new Date(), title: "Title2"},
                            {id: new Date(), title: "Title3"},
                            {id: new Date(), title: "Title4"}
                        ]
                    },
                    title: {value: "Title", styles: {}},
                    subtitle: {value: "subtitle", styles: {}},
                    styles: {
                        type: "decline"
                    }
                }
            },
            {
                type: "Progress",
                data: {
                    options: {
                        start: 1,
                        end: 10,
                    },
                    title: {value: "Progress bar?", styles: {}},
                    subtitle: {value: "subtitle", styles: {}},
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
                    title: {value: "Title", styles: {}},
                    subtitle: {value: "subtitle", styles: {}},
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
                    title: {value: "Label", styles: {}},
                    subtitle: {value: "subtitle", styles: {}},
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
                    title: {value: "Progress bar?", styles: {}},
                    subtitle: {value: "subtitle", styles: {}},
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
                    title: {value: "Progress bar?", styles: {}},
                    subtitle: {value: "subtitle", styles: {}},
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
                    title: {value: "Progress bar?", styles: {}},
                    subtitle: {value: "subtitle", styles: {}},
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
        styles: {}
    }
};

export default function surveyInfo(state = initialState) {
    return state
}