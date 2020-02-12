
import {FIND_TOPICS_FOR_LESSON, UPDATE_TOPIC, CREATE_TOPIC, DELETE_TOPIC} from "../actions/TopicActions"

const topicReducer = (state={topics: []}, action) => {
    switch (action.type) {
        case CREATE_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
            break;
        case DELETE_TOPIC:
            return {
                topics: state.topics.filter(
                    topic => topic._id !== action.topicId)
            }
            break;
        case UPDATE_TOPIC:
            return {
                topics: state.topics.map(topic =>
                    topic._id === action.topicId ? action.topic : topic
                )
            }
            break;
        case FIND_TOPICS_FOR_LESSON:
            return {
                topics: action.topics
            }
            break;
        default:
            return state
    }
}

export default topicReducer