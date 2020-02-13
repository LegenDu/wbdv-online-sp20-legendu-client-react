import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import {findAllWidgets, createWidget, deleteWidget, updateWidget, findWidgetsForTopic} from "../../services/WidgetService";

class WidgetList extends React.Component {
    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId);
        }
    }
    render(){
        return(
            <ul>
                {
                    this.props.widgets && this.props.widgets.map(widget =>
                        <div>
                            <li key={widget.id}>
                                {widget.type === "HEADING" && <HeadingWidget {...this.props} widget={widget}/>}
                                {widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget}/>}
                                <button onClick={() => this.props.deleteWidget(widget.id)}>
                                    Delete
                                </button>
                                <button>Up</button>
                                <button>Down</button>
                            </li>
                        </div>
                    )
                }
                <li>
                    <button onClick={this.props.createWidget}>
                        Create Widget
                    </button>
                </li>
            </ul>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
})

const dispatchToPropertyMapper = (dispatcher) => ({
    findWidgetsForTopic: (topicId) =>
        findWidgetsForTopic(topicId)
            .then(widgets => dispatcher({
                type: "WIDGETS_FOR_TOPIC",
                widgets: widgets
            })),
    udpateWidget: (widgetId, newWidget) =>
        updateWidget(widgetId, newWidget)
        .then(status => dispatcher({
            type: "UPDATE",
            widget: newWidget
        })),
    deleteWidget: (widgetId) =>
        deleteWidget(widgetId)
            .then(status => dispatcher({
                type: 'DELETE',
                widgetId: widgetId
            })),
    createWidget: () =>
        createWidget({
            title: "New Widget",
            type: "HEADING",
            id: (new Date()).getTime() + ""
        })
            .then(actualWidget => dispatcher({
                type: "ADD_WIDGET",
                widget: actualWidget
        })),
    findAllWidgets: () =>
        findAllWidgets()
            .then(actualWidgets => dispatcher({
                type: "FIND_ALL_WIDGETS",
                widgets: actualWidgets
            }))
})

export default connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(WidgetList)