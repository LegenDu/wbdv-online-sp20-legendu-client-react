export const findWidgetsForTopic = (topicId) =>
    fetch("http://localhost:8080/topics/${topicId}/widgets")
        .then(response => response.json())

export const findAllWidgets = () =>
    fetch("http://localhost:8080/widgets")
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`http://localhost:8080/widgets/${widgetId}`, {
        method: "DELETE"
    }).then(response => response.json())

export const createWidget = (topicId, widget) =>
    fetch(`http://localhost:8080/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': "application/json"
        }
    })
        .then(response => response.json())

export const updateWidget = (widgetId, newWidget) =>
    fetch(`http://localhost:8080/widgets/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(newWidget),
        headers: {
            'content-type': "application/json"
        }
    }).then(response => response.json())