import React from 'react';

const CourseGridCardComponent = ({deleteCourse, course}) => 
    <div className="border card-deck col col-12 col-sm-6 col-md-4 col-lg-2 mx-3 mt-3">
        <img src={require('./card.jpg')} className="card-img-top border-bottom" style={{width:'100%'}}/>
        <div className="card-body">
            <h6 className="card-title">{course.title}</h6>
            <p className="card-text"><small className="text-muted">Modified {course.lastmodified}</small></p>
        </div>
        <button onClick={(event)=>deleteCourse(course)} className="my-auto" style={{height: '50px'}}>..</button>
    </div>

export default CourseGridCardComponent