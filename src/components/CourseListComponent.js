import React from "react";
import CourseTableComponent from "../components/CourseTableComponent"
import CourseGridComponent from "../components/CourseGridComponent"

const CourseListComponent = ({updateFormState, 
                            newCourseTitle, 
                            addCourse, deleteCourse, updateCourse,
                            toggle, 
                            courses, layout, showCourseEditor, editCourse}) =>
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
                        onChange={updateFormState}
                        value={newCourseTitle} 
                        placeholder="New Course Title"
                        style={{minWidth: '400px', width: '100%'}}/>
                </div>
                <div className="col-2 my-auto"><i className="btn btn-danger fas fa-plus-circle" onClick={addCourse}></i></div>   
            </div>

            <div className="row border" style={{height: '50px'}}>
                {
                    layout === "table" && 
                    <div className="col-8 col-md-5 col-lg-5 my-auto"><span className="ml-2">Title</span></div>
                }
                {
                    layout === "grid" && 
                    <div className="col-7 my-auto"><span className="ml-2 pl-2">Recent Documents</span></div>
                }
                {
                    layout === "table" &&
                    <div className="col-md-4 col-lg-2 d-none d-md-block my-auto">Owned By 
                        <select className="ml-1">
                            <option selected="selected">me</option>
                        </select>
                    </div>
                }
                {
                    layout === "table" &&
                    <div className="col-lg-3 d-none d-lg-block my-auto">Last Modified</div>
                }
                {
                    layout === "grid" && 
                    <div className="col-5 my-auto">
                        <span className="" style={{float:'right'}}>
                            <i className="btn btn-primary fas fa-list mr-1" onClick={toggle}></i>
                            <i className="btn btn-primary fas fa-sort-alpha-down mr-1"></i>
                            <i className="btn btn-primary far fa-folder"></i>
                        </span>
                    </div>
                }
                {
                    layout === "table" &&
                    <div className="col-4 col-md-2 col-lg-2 my-auto">
                        <span className="" style={{float:'right'}}>
                            <i className="btn btn-primary fas fa-th mr-1" onClick={toggle}></i>
                            <i className="btn btn-primary fas fa-sort-alpha-down"></i>
                        </span>
                    </div>
                }
            </div>
            
            {
                layout === "grid" && 
                <CourseGridComponent 
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    showCourseEditor={showCourseEditor}
                    courses={courses}/>
            }
            {
                layout === "table" &&
                <CourseTableComponent 
                    editCourse={editCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    showCourseEditor={showCourseEditor}
                    courses={courses}/>
            }
        </div>

export default CourseListComponent