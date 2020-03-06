import {TOPICS_API_URL, WIDGETS_API_URL, WIDGETS_TOPICS_API_URL} from "../common/constants"

export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPICS_API_URL}/${topicId}/widgets`)
        .then(response => response.json());

export const findAllWidgets = () =>
    fetch(`${WIDGETS_API_URL}`)
        .then(response => response.json());

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_API_URL}/${widgetId}`, {
        method: "DELETE"
    }).then(response => response.json());

export const createWidget = (topicId, widget) =>
    fetch(`${TOPICS_API_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': "application/json"
        }
    }).then(response => response.json());

export const updateWidget = (widgetId, newWidget) =>
    fetch(`${WIDGETS_API_URL}/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(newWidget),
        headers: {
            'content-type': "application/json"
        }
    }).then(response => response.json());