import React from 'react';
import CourseEditorComponent from "../components/courseEditor/CourseEditorComponent"
import  {createCourse, findAllCourses, deleteCourse, updateCourse, findCourseById} from "../services/CourseService"
import CourseListComponent from '../components/CourseListComponent';


class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        newCourseTitle: 'New Course',
        courses : [],
        editing: false,
        editingCourse: false,
        editCourseTitle: 'Course Editor'
    }

    componentDidMount = async () => {
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
    }

    deleteCourse = async (courseToDelete) => {
        const status = await deleteCourse(courseToDelete._id)
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
    }

    updateCourse = (newCourseTitle, course) => {
        course.title = newCourseTitle
        course.lastmodified = new Date().getMonth() + "/" + new Date().getDate() + "/" +new Date().getFullYear()
        updateCourse(course)
            .then(status => {
                return findAllCourses()
            }).then(courses => {
                this.setState({
                    courses: courses
                })
            })
    }

    addCourse = () => {
        createCourse({
            title: this.state.newCourseTitle,
            ownedby: "me",
            lastmodified: new Date().getMonth() + "/" + new Date().getDate() + "/" +new Date().getFullYear()
        }).then(actual => {
            return findAllCourses()
        }).then(courses => {
            this.setState({
                courses: courses
            })
        })
    }

    toggle = () => {
        this.setState(prevState => ({
            layout: prevState.layout === 'grid' ? 'table': 'grid'        
        }))
    }

    updateFormState = (event) => {
        this.setState({
            newCourseTitle: event.target.value
        })
    }

    editCourse = (course) => {
        this.setState(prevState => ({
            courses: prevState.courses.map(c => {
                c.editing = false
                if(c._id === course._id) {
                    c.editing = true                   
                }
                else{
                    c.editing = false
                }
                return c
            })}))
    }

    showCourseEditor = (courseTitle) => {
        this.setState(prevState => ({
            editingCourse: true,
            editCourseTitle: courseTitle
        }))
    }

    closeEditCoursePage = () => {
        this.setState(prevState => ({
            editingCourse: false
        }))
    }

    render() {
        return (
            <div className="container-fluid mx-0 px-0" style={{width: '100%'}}>
                {
                    this.state.editingCourse && <CourseEditorComponent
                                                    courseTitle={this.state.editCourseTitle}
                                                    closeEditCoursePage={this.closeEditCoursePage}/>
                }

                {
                    !this.state.editingCourse && <CourseListComponent
                                                    updateFormState={this.updateFormState}
                                                    newCourseTitle={this.state.newCourseTitle}
                                                    addCourse={this.addCourse}
                                                    deleteCourse={this.deleteCourse}
                                                    updateCourse={this.updateCourse}
                                                    toggle={this.toggle}
                                                    courses={this.state.courses}
                                                    layout={this.state.layout}
                                                    showCourseEditor={this.showCourseEditor}
                                                    editCourse={this.editCourse}/>
                }
            </div>
        );
    }
} 
    
export default CourseManagerContainer