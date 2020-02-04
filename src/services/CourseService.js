import {API_URL} from "../common/constants"

class CourseService {
    createCourse = (course) => {
        return fetch(`${API_URL}`, {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }
    findAllCourses = () => {
        return fetch(`${API_URL}`)
            .then(response => response.json())
    }
    deleteCourse = (courseId) => {
        return fetch(`${API_URL}/${courseId}`,
            {method: 'DELETE'}).then(response => response.json())
    } 
    updateCourse = (courseId, course) => {
        return fetch(`${API_URL}/${courseId}`, {
            method: 'PUT',
            body: JSON.stringify(course),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    }
    findCourseById = (courseId) => {
        return fetch(`${API_URL}/${courseId}`)
            .then(response => response.json())
    }
}

export default CourseService