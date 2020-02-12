import {TOPICS_API_URL, LESSONS_TOPICS_API_URL} from "../common/constants"

export const createTopic = async (lessonId) => {
    let response = await fetch(LESSONS_TOPICS_API_URL(lessonId), {
        method: 'POST',
        body: JSON.stringify({title: 'New Topic'}),
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()
}

export const findTopicsForLesson = async (lessonId) => {
    let response = await fetch(LESSONS_TOPICS_API_URL(lessonId))
    return response.json()
}

export const findTopic = async (topicId) => {

}

export const updateTopic = async (topic) => {
    let response = await fetch(`${TOPICS_API_URL}/${topic._id}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()
}

export const deleteTopic = async (topicId) => {
    let response = await fetch(`${TOPICS_API_URL}/${topicId}`, {
        method: 'DELETE'
    })
    return response.json()
}