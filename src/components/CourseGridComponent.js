import React from 'react';
import CourseCardStatefulComponent from './CourseCardStatefulComponent'

const CourseGridComponent = ({deleteCourse, updateCourse, showCourseEditor, courses}) => 
    <div>
        <div className="row" style={{marginLeft: '10px', marginRight: '10px'}}>
            {
                courses.map(function(course, index) {
                    return (
                        <CourseCardStatefulComponent
                            key={course._id}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}
                            showCourseEditor={showCourseEditor}
                            course={course}/>
                    )
                })
            }
            
        </div>
    </div>
    

export default CourseGridComponent