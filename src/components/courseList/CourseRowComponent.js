import React from 'react';
import 'font-awesome/css/font-awesome.min.css'

const CourseRowComponent = ({editCourse, deleteCourse, course}) => 
    <li className={`list-group-item ${course.editing ? 'active': ''}`}
        onClick={() => editCourse(course)}>

        {course.title} {course.editing}    
        {
            course.editing && <span>
                <button>edit</button>
                <button onClick={() => deleteCourse(course)}>delete</button>
            </span>
        }
        {/* <i className="fas fa-trash-alt"></i> */}
    </li>

export default CourseRowComponent