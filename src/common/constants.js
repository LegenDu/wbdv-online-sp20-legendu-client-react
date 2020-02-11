export const API_URL_COURSES = "https://wbdv-generic-server.herokuapp.com/api/001023157/courses"
export const MODULES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001023157/modules"
export const LESSONS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001023157/lessons"
export const COURSES_MODULES_API_URL = (courseId) => `https://wbdv-generic-server.herokuapp.com/api/001023157/courses/${courseId}/modules`
export const MODULES_LESSONS_API_URL = (moduleId) => `https://wbdv-generic-server.herokuapp.com/api/001023157/modules/${moduleId}/lessons`
export const API_URL_TOPICS = "https://wbdv-generic-server.herokuapp.com/api/001023157/topics"