
export const WIDGETS_FOR_TOPIC = "WIDGETS_FOR_TOPIC";
export const findWidgetsForTopicAction = (widgets) => ({
    type: WIDGETS_FOR_TOPIC,
    widgets: widgets
});

export const UPDATE_WIDGET = "UPDATE_WIDGET";
export const updateWidgetAction = (widgetId, widget) => ({
    type: UPDATE_WIDGET,
    id: widgetId,
    widget: widget
});

export const DELETE_WIDGET = "DELETE_WIDGET";
export const deleteWidgetAction = (widgetId, order) => ({
    type: DELETE_WIDGET,
    widgetId: widgetId,
    order: order
});

export const CREATE_WIDGET = "CREATE_WIDGET";
export const createWidgetAction = (newWidget) => ({
    type: CREATE_WIDGET,
    widget: newWidget
});

export const FIND_ALL_WIDGETS = "FIND_ALL_WIDGETS";
export const findAllWidgetsAction = (widgets) => ({
    type: FIND_ALL_WIDGETS,
    widgets: widgets
});

export const CHANGE_ORDER = "CHANGE_ORDER";
export const changeOrderAction = (order1, order2) => ({
    type: "CHANGE_ORDER",
    order1: order1,
    order2: order2
});