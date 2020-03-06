import {TOPICS_API_URL, LESSON_TOPICS_API_URL} from "../common/constants"

export const createTopic = async (lessonId, topic) => {
    let response = await fetch(`${LESSON_TOPICS_API_URL}/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
             'content-type': 'application/json'
         }
    });
    return response.json();
};

export const findTopicsForLesson = async (lessonId) => {
    let response = await fetch(`${LESSON_TOPICS_API_URL}/${lessonId}/topics`)
    return response.json()
};

export const findAllTopics = async (topicId) => {
    let response = await fetch(`${TOPICS_API_URL}`)
    return response.json()
};

export const updateTopic = async (topic) => {
    let response = await fetch(`${TOPICS_API_URL}/${topic.id}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    });
    return response.json()
};

export const deleteTopic = async (topicId) => {
    let response = await fetch(`${TOPICS_API_URL}/${topicId}`, {
        method: 'DELETE'
    });
    return response.json()
};