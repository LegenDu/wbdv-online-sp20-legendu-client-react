import React from 'react'

const CourseHeadingComponent = () =>
    <div>
        <nav className="navbar navbar-light border">
            <div className="container-fluid">
                <button className="navbar-toggler wbdv-field wbdv-hamburger" type="button" data-toggle="collapse" data-target="" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a href="#" className="navbar-brand d-none d-md-block mx-1 mx-sm-2 wbdv-label wbdv-course-manager">Course Manager</a>
                
                <form className="form-inline pl-2 mx-sm-1">
                    <input className="form-control wbdv-field wbdv-new-course" id="wbdv-new-course" type="text" placeholder="New Course Title"/>
                    {/* <input 
                        onChange={this.udpateFormState}
                        value={this.state.newCourseTitle} 
                        placeholder="New Course Title"/> */}
                    <button className="btn wbdv-button wbdv-add-course">
                        <i className="fas fa-plus-circle fa-2x"></i>
                    </button>
                </form>
            </div>
            
            {/* <h2>Course Heading</h2> */}
        </nav>
    </div>
    

export default CourseHeadingComponent