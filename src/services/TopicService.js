import {TOPICS_API_URL, LESSONS_TOPICS_API_URL} from "../common/constants"
const svrUrl = "http://localhost:8080/api";

// export const createTopic = async (lessonId) => {
//     let response = await fetch(LESSONS_TOPICS_API_URL(lessonId), {
//         method: 'POST',
//         body: JSON.stringify({title: 'New Topic'}),
//         headers: {
//             'content-type': 'application/json'
//         }
//     })
//     return response.json()
// }

export const createTopic = async (lessonId, topic) => {
    let response = await fetch(`${svrUrl}/lessons/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
             'content-type': 'application/json'
         }
    })
    return response.json();
}

export const findTopicsForLesson = async (lessonId) => {
    // let response = await fetch(LESSONS_TOPICS_API_URL(lessonId))
    let response = await fetch(`${svrUrl}/lessons/${lessonId}/topics`)
    return response.json()
}

export const findAllTopics = async (topicId) => {
    let response = await fetch(`${svrUrl}/topics`)
    return response.json()
}

export const updateTopic = async (topic) => {
    let response = await fetch(`${TOPICS_API_URL}/${topic.id}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()
}

export const deleteTopic = async (topicId) => {
    let response = await fetch(`${svrUrl}/topics/${topicId}`, {
        method: 'DELETE'
    })
    return response.json()
}