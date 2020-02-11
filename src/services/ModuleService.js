import {COURSES_MODULES_API_URL, MODULES_API_URL} from "../common/constants"

export const createModule = async (courseId, module) => {
    let response = await fetch(COURSES_MODULES_API_URL(courseId), {
        method: 'POST',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()
}

export const findModuleForCourse = async (courseId) => {
    let response = await fetch(COURSES_MODULES_API_URL(courseId))
    return response.json()
}

export const updateModule = async (moduleId, module) => {
    let response = await fetch(`${MODULES_API_URL}/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            "content-type": "application/json"
        }
    })
    return response.json()
}

export const deleteModule = async (moduleId) => {
    let response = await fetch(`${MODULES_API_URL}/${moduleId}`, {method: 'DELETE'})
    return response.json()
}