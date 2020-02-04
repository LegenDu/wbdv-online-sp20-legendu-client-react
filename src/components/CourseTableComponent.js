import React from 'react';
// import CourseRowComponent from "./CourseRowComponent";
import CourseRowStatefulComponent from "./CourseRowStatefulComponent";

const CourseTableComponent = ({editCourse, deleteCourse, updateCourse, showCourseEditor, courses}) =>
    <div className="">
        {/* <h3>Course Table {courses.length}</h3> */}
        <ul className="list-group">
            {
                courses.map(course => 
                    <CourseRowStatefulComponent 
                        editCourse={editCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                        showCourseEditor={showCourseEditor}
                        key={course._id}
                        course={course}/>
                )
            }
        </ul>
    </div>

export default CourseTableComponent