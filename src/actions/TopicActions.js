
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
export const deleteTopicAction = (topics) => ({
    type: DELETE_TOPIC,
    topics: topics
})

export const FIND_ALL_TOPICS = "FIND_ALL_TOPICS"
export const findAllTopics = (topics) => ({
    type: FIND_ALL_TOPICS,
    topics: topics
})