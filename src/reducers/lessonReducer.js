// import {CREATE_LESSON, DELETE_LESSON, UPDATE_LESSON, FIND_LESSONS_FOR_MODULE, FIND_ALL_LESSONS} from "../actions/LessonActions"
import {CREATE_LESSON, DELETE_LESSON, UPDATE_LESSON, FIND_LESSONS_FOR_MODULE, FIND_ALL_LESSONS} from "../actions/LessonActions"

const lessonReducer = (state={lessons: []}, action) => {
    switch (action.type) {
        case CREATE_LESSON:
            return {
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
            break;
        case DELETE_LESSON:
            return {
                lessons: state.lessons.filter(
                    lesson => lesson._id !== action.lessonId)
            }
            break;
        case UPDATE_LESSON:
            return {
                lessons: state.lessons.map(lesson =>
                    lesson._id === action.lessonId ? action.lesson : lesson
                )
            }
            break;
        case FIND_LESSONS_FOR_MODULE:
            return {
                lessons: action.lessons
            }
            break;
        case FIND_ALL_LESSONS:
            return {
                lessons: action.lessons
            }
            break;
        default:
            return state
    }
}

export default lessonReducer