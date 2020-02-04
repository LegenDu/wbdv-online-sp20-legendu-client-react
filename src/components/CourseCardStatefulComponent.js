import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class CourseCardStatefulComponent extends React.Component{
    constructor(props) {
        super(props)
    }
    state ={
        editing: false,
        courseTitle: this.props.course.title
    }
    editCourse = () => {
        this.setState({
            editing: true
        })
    }
    updateForm = (event) => {
        this.setState({
            courseTitle: event.target.value
        })
    }
    saveCourse =() => {
        this.setState(prevState => ({
            editing: false
        }))
        this.props.updateCourse(this.state.courseTitle, this.props.course)
    }

    render (){
        return (
            <div className="border card-deck col col-12 col-sm-6 col-md-4 col-lg-2 px-0 mx-2 my-2" style={{maxWidth: '18rem'}}>
                <img src={require('./card.jpg')} className="card-img-top border-bottom" style={{height: '200px'}}/>
                <div className="card-body">
                    {
                        this.state.editing && 
                        <div className="row">
                            <input onChange={(event) => this.updateForm(event)} value={this.state.courseTitle}/>
                            <span style={{float: 'right'}}>
                                <i className="btn fas fa-check" onClick={(event) => this.saveCourse(event)}></i>
                            </span>
                        </div>
                    }
                    {
                        !this.state.editing &&
                        <a href="#" style={{color: 'black'}}>
                            <h6 className="card-title text-truncate" style={{}}>
                                {this.state.courseTitle}</h6>
                        </a>
                    }
                    <p className="card-text">
                        <small className="text-muted mr-1"><i class="far fa-file-alt"></i></small>
                        <small className="text-muted mr-1"><i class="fas fa-user-friends"></i></small>
                        <small className="text-muted">Modified {this.props.course.lastmodified}</small>
                        {
                            !this.state.editing &&
                            <small style={{float: 'right'}}>
                                <i className="btn mx-1 px-0 fas fa-pencil-alt" onClick={() => this.editCourse()}></i>
                                <i className="btn mx-1 px-0 fas fa-trash-alt" onClick={() => this.props.deleteCourse(this.props.course)}></i>
                            </small>  
                        }
                        
                    </p>
                </div>
                
            </div>
        )
    }
}

export default CourseCardStatefulComponent