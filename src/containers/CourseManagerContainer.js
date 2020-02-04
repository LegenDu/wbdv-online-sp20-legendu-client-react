import React from 'react';
// import CourseHeadingComponent from "../components/CourseHeadingComponent"
import CourseTableComponent from "../components/CourseTableComponent"
import CourseGridComponent from "../components/CourseGridComponent"
import CourseService from '../services/CourseService'
import CourseEditorComponent from '../components/course-editor/CourseEditorComponent'

const courseService = new CourseService()

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        newCourseTitle: 'New Course',
        courses : [],
        editing: false,
        editingCourse: false
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

    ShowCourseEditor = (courseTitle) => {
        console.log('opening')
        this.setState(prevState => ({
            editingCourse: true
        }))
    }

    closeEditCoursePage = () => {
        this.setState(prevState => ({
            editingCourse: false
        }))
    }

    render() {
        return (
            <div className="container-fluid mx-0 px-0">

                {
                    this.state.editingCourse && <CourseEditorComponent/>
                }

                {
                    !this.state.editingCourse &&
                    <div>
                        <div className="row border" style={{height: '60px', marginLeft: '0px'}}>
                            <div className="col-1 my-auto">
                                <i className="fas fa-bars fa-2x"></i>  
                            </div>
                            <div className="col-md-3 d-none d-md-block my-auto px-0">
                                <span className="" style={{font: '1.5rem bold'}}>Course Manager</span>
                            </div>
                            <div className="col-9 col-md-6 my-auto px-0">
                                <input 
                                    className="px-0 mx-0"
                                    onChange={this.udpateFormState}
                                    value={this.state.newCourseTitle} 
                                    placeholder="New Course Title"
                                    style={{minWidth: '400px', width: '100%'}}/>
                            </div>
                            <div className="col-2 my-auto"><i className="btn btn-danger fas fa-plus-circle" onClick={this.addCourse}></i></div>   
                        </div>

                        <div className="row border" style={{height: '50px'}}>
                            {
                                this.state.layout === "table" && 
                                <div className="col-9 col-sm-10 col-md-6 col-lg-5 my-auto"><span className="mx-2">Title</span></div>
                            }
                            {
                                this.state.layout === "grid" && 
                                <div className="col-9 col-sm-10 my-auto"><span className="mx-2">Recent Documents</span></div>
                            }
                            {
                                this.state.layout === "table" &&
                                <div className="col-md-4 col-lg-2 d-none d-md-block my-auto">Owned By</div>
                            }
                            {
                                this.state.layout === "table" &&
                                <div className="col-lg-3 d-none d-lg-block my-auto">Last Modified</div>
                            }
                            <div className="col-3 col-sm-2 my-auto">
                                <span className="" style={{float:'right'}}>
                                    {
                                        this.state.layout === "grid" &&
                                        <i className="btn btn-primary fas fa-list mr-1" onClick={this.toggle}></i>
                                    }
                                    {
                                        this.state.layout === "table" &&
                                        <i className="btn btn-primary fas fa-th mr-1" onClick={this.toggle}></i>
                                    }
                                    <i class="btn btn-primary fas fa-sort-alpha-down"></i>
                                    
                                </span>
                            </div>
                        </div>
                        
                        {
                            this.state.layout === "grid" && 
                            <CourseGridComponent 
                                deleteCourse={this.deleteCourse}
                                updateCourse={this.updateCourse}
                                courses={this.state.courses}/>
                        }
                        {
                            this.state.layout === "table" &&
                            <CourseTableComponent 
                                editCourse={this.editCourse}
                                deleteCourse={this.deleteCourse}
                                updateCourse={this.updateCourse}
                                ShowCourseEditor={this.ShowCourseEditor}
                                courses={this.state.courses}/>
                        }
                    </div>
                }
            </div>
        );
    }
} 
    
export default CourseManagerContainer