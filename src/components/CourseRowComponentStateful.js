import React from 'react';

class CourseRowComponentStateful extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        active: false,
        editing: false,
        courseTitle: this.props.course.title
    }
    selectCourse = () => {
        this.setState(prevState => ({
            active: true
        }))
    }
    editCourse = () => {
        this.setState(prevState => ({
            editing: true
        }))
    }
    updateForm = (event) => {
        this.setState({
            courseTitle: event.target.value
        })
    }
    saveCourse = () => {
        this.setState(prevState => ({
            active: !prevState.active,
            editing: false
        }))
        this.props.updateCourse(this.state.courseTitle, this.props.course)
    }

    render() {
        return (
            <li className={`list-group-item ${this.state.active?'active':''}`}>
                {!this.state.active && !this.state.editing &&
                    <div className="row" onClick={() => this.selectCourse()}>
                        <div className="col-10 col-md-6 col-lg-5">
                            {this.props.course.title}
                        </div>
                        <div className="col-md-4 col-lg-2 d-none d-md-block">
                            {this.props.course.ownedby}
                        </div>
                        <div className="col-lg-3 d-none d-lg-block">
                            {this.props.course.lastmodified}
                        </div>
                    </div>
                }  
                {
                    this.state.active && !this.state.editing &&
                    <div className="row py-auto">
                        <div className="col-10">
                            {this.props.course.title}
                        </div>
                        <div className="col-2">
                            <span style={{float: 'right'}}>
                                <button className="btn btn-primary" onClick={(event) => this.editCourse()}><i className="fas fa-pencil-alt"></i></button>
                                <button className="btn btn-primary" onClick={(event) => this.props.deleteCourse(this.props.course)}><i className="fas fa-trash-alt"></i></button>
                            </span>
                        </div>
                    </div>   
                }
                {
                    this.state.active && this.state.editing &&
                    <div className="row py-auto">
                        <div className="col-10">
                            <input onChange={this.updateForm} value={this.state.courseTitle} style={{width: '50%'}}/>
                        </div>
                        <div className="col-2">
                            <span style={{float: 'right'}}>
                                <button className="btn btn-primary" onClick={(event) => this.saveCourse(event)}><i className="fas fa-check"></i></button>
                            </span>
                        </div>
                    </div>   
                }
            </li>
        )
    }
}

export default CourseRowComponentStateful