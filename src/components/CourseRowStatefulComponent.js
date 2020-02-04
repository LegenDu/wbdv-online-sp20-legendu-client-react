import React from 'react';

class CourseRowStatefulComponent extends React.Component {
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
            active: !prevState.active
        }))
    }
    cancelSelection = () => {
        this.setState(prevState => ({
            active: false
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
            active: false,
            editing: false
        }))
        this.props.updateCourse(this.state.courseTitle, this.props.course)
    }

    render() {
        return (
            <li className={`list-group-item border ${this.state.active?'active':''}`} style={{marginTop: '-1px'}}>
                {!this.state.active && !this.state.editing &&
                    <div className="row" onClick={() => this.selectCourse()}>
                        <div className="col-10 col-md-6 col-lg-5">
                            <a href="#" style={{color: 'black'}}>{this.props.course.title}</a>
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
                        <div className="col-10 col-md-6 col-lg-5">
                            <a href="#" style={{color: 'white'}}
                                onClick={() => this.props.ShowCourseEditor(this.props.course.title)}>{this.props.course.title}</a>
                        </div>
                        <div className="col-md-4 col-lg-2 d-none d-md-block">
                            {this.props.course.ownedby}
                        </div>
                        <div className="col-lg-3 d-none d-lg-block">
                            {this.props.course.lastmodified}
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

export default CourseRowStatefulComponent