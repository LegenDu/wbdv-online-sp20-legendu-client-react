import React from 'react';
// import CourseHeadingComponent from "../components/CourseHeadingComponent"
import CourseTableComponent from "../components/CourseTableComponent"
import CourseGridComponent from "../components/CourseGridComponent"
import CourseService from '../services/CourseService'
// import CourseEditor from '../components/CourseEditor/CoursEditor'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const courseService = new CourseService()

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'grid',
        newCourseTitle: 'New Course',
        courses : [],
        editing: false
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                return courseService.findAllCourses()
            }).then(courses => {
                this.setState({
                    courses: courses
                })
            })
        // this.setState((prevState) => ({
        //     courses: prevState.courses.filter(course => 
        //         course._id !== courseToDelete._id)
        //     })
        // )
    }

    updateCourse = (newCourseTitle, course) => {
        course.title = newCourseTitle
        courseService.updateCourse(course._id, course)
            .then(status => {
                return courseService.findAllCourses()
            }).then(courses => {
                this.setState({
                    courses: courses
                })
            })
    }

    addCourse = () => {
        courseService.createCourse({
            title: this.state.newCourseTitle,
            ownedby: "me",
            lastmodified: "1/1/2020"
        }).then(actual => {
            return courseService.findAllCourses()
        }).then(courses => {
            this.setState({
                courses: courses
            })
        })
        // this.setState(prevState => ({
        //     courses: [...prevState.courses, {
        //         _id: (new Date()).getTime() + '',
        //         title: prevState.newCourseTitle
        //     }]
        // })
        // )
    }

    toggle = () => {
        this.setState(prevState => ({
            layout: prevState.layout === 'grid' ? 'table': 'grid'        
        }))
    }

    udpateFormState = (event) => {
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

    render() {
        return (
            <div className="container-fluid mx-0">
                {/* <h1>Course Manager</h1> */}
                {/* <CourseHeadingComponent/> */}

                {/* {
                    this.state.editingCourse && <CourseEditor hideCourseEditor={this.hideCourseEditor}/>
                } */}

                <div className="row border" style={{height: '60px'}}>
                    <div className="col-1 my-auto">
                        <button className="mx-3">
                            <i className="fas fa-bars"></i>    
                        </button>
                    </div>
                    <div className="col-9 my-auto">
                        <input 
                            className="mx-3"
                            onChange={this.udpateFormState}
                            value={this.state.newCourseTitle} 
                            placeholder="New Course Title"
                            style={{minWidth: '400px', width: '100%'}}/>
                    </div>
                    <div className="col-2 my-auto"><button onClick={this.addCourse}>Add</button></div>   
                </div>

                <div className="row border" style={{height: '50px'}}>
                    <div className="col-10 col-md-6 col-lg-5 my-auto"><span className="mx-2">Title</span></div>
                    <div className="col-md-4 col-lg-2 d-none d-md-block my-auto">Owned By</div>
                    <div className="col-lg-3 d-none d-lg-block my-auto">Last Modified</div>
                    <div className="col-2 my-auto">
                        <button onClick={this.toggle}>Toggle</button>
                        <button>Sort</button>
                    </div>
                </div>
                {
                    this.state.layout === "grid" && 
                    <CourseGridComponent 
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                }
                {
                    this.state.layout === "table" &&
                    <CourseTableComponent 
                        editCourse={this.editCourse}
                        deleteCourse={this.deleteCourse}
                        updateCourse={this.updateCourse}
                        courses={this.state.courses}/>
                }
            </div>
        );
    }
} 
    
export default CourseManagerContainer