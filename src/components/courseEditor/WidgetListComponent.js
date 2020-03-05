import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import {findAllWidgets, createWidget, deleteWidget, updateWidget, findWidgetsForTopic} from "../../services/WidgetService";

class WidgetList extends React.Component {
    componentDidMount() {
        let topicId = this.props.topicId;
        if(!this.props.topicId)
            topicId = -1;
        this.props.findWidgetsForTopic(topicId)
            .then(res => {
                this.setState({
                    widgetNum: this.props.widgets.length
                })
            })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.topicId !== this.props.topicId || prevProps.lessonId !== this.props.lessonId) {
            this.props.findWidgetsForTopic(this.props.topicId)
                .then(res => {
                    this.setState({
                        widgetNum: this.props.widgets.length
                    })
                })
        }
    }

    state={
        editingWidgetId: '',
        widget:{
            id: ''
        },
        previewMode: false,
        widgetNum: 0,
        orderChanged: false
    };

    addWidget = (topicId) => {
        const widget = {
            title: "Heading Widget",
            type: "HEADING",
            size: 1,
            topicId: topicId,
            widOrder: this.state.widgetNum
        };
        this.props.createWidget(topicId, widget)
            .then(widget => {
                this.setState(prev => {
                    prev.widgetNum++;
                    return prev
                })
            })
    };


    saveWidget = (widget) => {
        this.props.updateWidget(widget.id, widget);
        this.setState({
            editingWidgetId: '',
            widget: widget
        })
    };


    changeWidgetOrder = (order, dir) => {
        if(dir === "UP"){
            this.props.changeOrder(order - 1, order)
        }
        else if(dir === "DOWN")
            this.props.changeOrder(order, order + 1);
        this.setState({
            orderChanged: true
        })
    };

    saveAllWidgets = () => {
        this.props.widgets.map(widget => {
            if(widget.topicId === this.props.topicId)
                this.props.updateWidget(widget.id, widget)
        })
        this.setState({
            orderChanged: false
        })
    };

    removeWidget = (widgetId, order) => {
        this.props.deleteWidget(widgetId, order)
            .then(status => {
                this.props.widgets.map(widget => {
                    if(widget.widOrder >= order)
                        this.props.updateWidget(widget.id, widget)
                })
            }).then(widget => {
            this.setState(prev => {
                prev.widgetNum--;
                return prev
            })
        })
    };

    render(){
        return(
            <ul className="list-group mx-1">
                <li className="list-group-item mb-0 d-flex justify-content-end">
                    <button className="btn btn-success py-0 px-3"
                            onClick={() => this.saveAllWidgets()}>Save All</button>
                    <button className="btn ">Preview</button>
                    {
                        this.state.previewMode &&
                            <i className="fas fa-toggle-on fa-2x" id="toggle"
                                onClick={() => {
                                    this.setState({
                                        previewMode: false
                                    })}
                                }/>
                    }
                    {
                        !this.state.previewMode &&
                            <i className="fas fa-toggle-off fa-2x" id="toggle"
                               onClick={() => {
                                   this.setState({
                                       previewMode: true
                                   })}
                               }/>
                    }
                </li>
                {
                    this.props.widgets && this.props.widgets.map(widget =>
                        <li className="list-group-item px-1 rounded" key={widget.id}>
                            {widget.type === "HEADING" &&
                                <HeadingWidget saveWidget={this.saveWidget}
                                             editing={this.state.widget.id === widget.id}
                                             widgetNum={this.state.widgetNum}
                                             orderChanged={this.state.orderChanged}
                                             {...this.props}
                                             widget={widget}
                                             previewMode={this.state.previewMode}
                                             changeWidgetOrder={this.changeWidgetOrder}
                                             removeWidget={this.removeWidget}/>}
                            {widget.type === "PARAGRAPH" &&
                                <ParagraphWidget saveWidget={this.saveWidget}
                                             editing={this.state.widget.id === widget.id}
                                             widgetNum={this.state.widgetNum}
                                             orderChanged={this.state.orderChanged}
                                             {...this.props}
                                             widget={widget}
                                             previewMode={this.state.previewMode}
                                             changeWidgetOrder={this.changeWidgetOrder}
                                             removeWidget={this.removeWidget}/>}
                        </li>)
                }
                <li>
                    {
                        !this.state.previewMode &&
                        <div className="d-flex justify-content-end mt-2">
                        <span onClick={() => this.addWidget(this.props.topicId)}
                              className="btn d-flex justify-content-center mfr-0" id="wbdv-add-widget-btn">
                            <i className="fas fa-plus-circle fa-add-btn p-0"/>
                        </span>
                        </div>
                    }
                </li>
            </ul>
        )}


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
    updateWidget: (widgetId, newWidget) =>
        updateWidget(widgetId, newWidget)
        .then(status => dispatcher({
            type: "UPDATE_WIDGET",
            widget: newWidget
        })),
    deleteWidget: (widgetId, order) =>
        deleteWidget(widgetId)
            .then(status => dispatcher({
                type: 'DELETE_WIDGET',
                widgetId: widgetId,
                order: order
            })),
    createWidget: (topicId, widget) =>
        createWidget(topicId, widget)
            .then(actualWidget => dispatcher({
                type: "ADD_WIDGET",
                widget: actualWidget
        })),
    findAllWidgets: () =>
        findAllWidgets()
            .then(actualWidgets => dispatcher({
                type: "FIND_ALL_WIDGETS",
                widgets: actualWidgets
            })),
    changeOrder: (order1, order2) => {
        dispatcher({
            type: "CHANGE_ORDER",
            order1: order1,
            order2: order2
        })
    }
});

export default connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(WidgetList)