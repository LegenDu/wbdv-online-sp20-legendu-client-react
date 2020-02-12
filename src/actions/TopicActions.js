
export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON"
export const findTopicsForLessonAction = (topics) => ({
    type: FIND_TOPICS_FOR_LESSON,
    topics: topics
})

export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const updateTopicAction = (topic) => ({
    type: UPDATE_TOPIC,
    topic: topic,
    topicId: topic._id
})

export const CREATE_TOPIC = "CREATE_TOPIC"
export const createTopicAction = (actualTopic) => ({
    type: CREATE_TOPIC,
    topic: actualTopic
})

export const DELETE_TOPIC = "DELETE_TOPIC"
export const deletetopicAction = (topics) => ({
    type: DELETE_TOPIC,
    topics: topics
})