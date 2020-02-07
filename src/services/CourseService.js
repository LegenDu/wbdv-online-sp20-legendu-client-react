import {API_URL} from "../common/constants"

// class CourseService {
    export const createCourse = async (course) => {
        let response = await fetch(`${API_URL}`, {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        })
        return response.json()
    }
    
    export const findAllCourses = async () => {
        let response = await fetch(`${API_URL}`)
        return response.json()
    }
    
    export const deleteCourse = async (courseId) => {
        let response = await fetch(`${API_URL}/${courseId}`, {method: 'DELETE'})
        return response.json()
    } 
    
    export const updateCourse = async (course) => {
        let response = await fetch(`${API_URL}/${course._id}`, {
            method: 'PUT',
            body: JSON.stringify(course),
            headers: {
                "content-type": "application/json"
            }
        })
        return response.json()
    }
    
    export const findCourseById = async (courseId) => {
        let response = await fetch(`${API_URL}/${courseId}`)
        return response.json()
    }
// }

// export default CourseService