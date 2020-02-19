const widgets = [
    // {_id: "123", title: "Widget 12", type: "HEADING"},
    // {_id: "234", title: "Widget 23", type: "PARAGRAPH"},
    // {_id: "345", title: "Widget 34", type: "HEADING"},
    // {_id: "456", title: "Widget 45", type: "PARAGRAPH"}
]

const widgetReducer = (state = {
    widgets: widgets
}, action) => {
    switch (action.type) {
        case "ADD_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case 'DELETE_WIDGET':
            return {
                // widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
                widgets: state.widgets.filter(widget => {
                    if(widget.order > action.order){
                        widget.order = widget.order - 1;
                        console.log(widget.order)
                    }
                    return widget.id != action.widgetId
                })
            }
        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            }
        case "WIDGETS_FOR_TOPIC":
            return{
                widgets: action.widgets
            }
        case "SAVE_ALL":
            return{
                widgets: state.widgets
            }
        case "UPDATE_WIDGET":
            return{
                    widgets: state.widgets.map(widget =>
                        widget.id === action.id ? action.widget : widget)
            }
        case "CHANGE_ORDER":
            return state

        default:
            return state
    }
}

export default widgetReducer