// const svrUrl = "https://wbdv-cs5610-legendu-java-a5.herokuapp.com"
const svrUrl = "http://localhost:8080/api"

export const findWidgetsForTopic = (topicId) =>
    fetch(`${svrUrl}/topics/${topicId}/widgets`)
        .then(response => response.json())

export const findAllWidgets = () =>
    fetch(`${svrUrl}/widgets`)
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${svrUrl}/widgets/${widgetId}`, {
        method: "DELETE"
    }).then(response => response.json())

export const createWidget = (topicId, widget) =>
    fetch(`${svrUrl}/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': "application/json"
        }
    })
        .then(response => response.json())

export const updateWidget = (widgetId, newWidget) =>
    fetch(`${svrUrl}/widgets/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(newWidget),
        headers: {
            'content-type': "application/json"
        }
    }).then(response => response.json())