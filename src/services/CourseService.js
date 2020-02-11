import {API_URL_COURSES} from "../common/constants"

// class CourseService {
    export const createCourse = async (course) => {
        let response = await fetch(`${API_URL_COURSES}`, {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        })
        return response.json()
    }
    
    export const findAllCourses = async () => {
        let response = await fetch(`${API_URL_COURSES}`)
        return response.json()
    }
    
    export const deleteCourse = async (courseId) => {
        let response = await fetch(`${API_URL_COURSES}/${courseId}`, {method: 'DELETE'})
        return response.json()
    } 
    
    export const updateCourse = async (course) => {
        let response = await fetch(`${API_URL_COURSES}/${course._id}`, {
            method: 'PUT',
            body: JSON.stringify(course),
            headers: {
                "content-type": "application/json"
            }
        })
        return response.json()
    }
    
    export const findCourseById = async (courseId) => {
        let response = await fetch(`${API_URL_COURSES}/${courseId}`)
        return response.json()
    }
// }

// export default CourseService