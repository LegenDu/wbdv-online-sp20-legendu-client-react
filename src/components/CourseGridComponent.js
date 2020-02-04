import React from 'react';
import CourseCardStatefulComponent from './CourseCardStatefulComponent'

const CourseGridComponent = ({deleteCourse, updateCourse, courses}) => 
    <div className="row d-flex justify-content-start" style={{marginLeft: '10px', marginRight: '10px'}}>
        {
            courses.map(function(course, index) {
                return (
                    <CourseCardStatefulComponent
                        key={course._id}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                        course={course}/>
                )
            })
        }
    </div>
    

export default CourseGridComponent