import React from 'react';
// import CourseRowComponent from "./CourseRowComponent";
import CourseRowComponentStateful from "./CourseRowComponentStateful";

const CourseTableComponent = ({editCourse, deleteCourse, updateCourse, courses}) =>
    <div className="">
        {/* <h3>Course Table {courses.length}</h3> */}
        <ul className="list-group">
            {
                courses.map(course => 
                    <CourseRowComponentStateful 
                        editCourse={editCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                        key={course._id}
                        course={course}/>
                )
            }
        </ul>
    </div>

export default CourseTableComponent