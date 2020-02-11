import {LESSONS_API_URL, MODULES_LESSONS_API_URL} from "../common/constants"

export const createLesson = async (moduleId) => {
    let response = await fetch(MODULES_LESSONS_API_URL(moduleId), {
        method: 'POST',
        body: JSON.stringify({title: 'New Lesson'}),
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()
}

export const findLessonsForModule = async (moduleId) => {
    let response = await fetch(MODULES_LESSONS_API_URL(moduleId))
    return response.json()
}

export const updateLesson = async (lesson) => {
    let response = await fetch(`${LESSONS_API_URL}/${lesson._id}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()
}

export const deleteLesson = async (lessonId) => {
    let response = await fetch(`${LESSONS_API_URL}/${lessonId}`, {
        method: 'DELETE'
    })
    return response.json()
}

export const findAllLessons = async () => {
    let response = await fetch(LESSONS_API_URL)
    return response.json()
}