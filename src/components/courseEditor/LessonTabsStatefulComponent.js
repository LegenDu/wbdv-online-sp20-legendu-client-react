import React from "react";
import { connect } from "react-redux";
import {updateLesson, findLessonsForModule, createLesson, deleteLesson, findAllLessons} from "../../services/LessonService";
import {CREATE_LESSON, UPDATE_LESSON, DELETE_LESSON} from "../../actions/LessonActions"
import {findLessonsForModuleAction, createLessonAction, updateLessonAction, deleteLessonAction, findAllLessonsAction} from "../../actions/LessonActions" 

class LessonTabsStatefulComponent extends React.Component {
    componentDidMount(){
        this.props.findLessonsForModule(this.props.moduleId)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.moduleId !== prevProps.moduleId) {
            this.props.findLessonsForModule(this.props.moduleId)
        }
    }
    state = {
        selectedLessonId: '',
        editingLessonId: '',
        courseTitle: '',
        lesson: {
            title: '',
            _id: ''
        }
    }
    
    render () {
        return(
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {
                        this.props.lessons && this.props.lessons.map(lesson => 
                            <li className="nav-item mx-2 my-1 py-0 px-4"
                                onClick={() => {
                                    this.setState({
                                        selectedLessonId: lesson._id
                                    })
                                    this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lesson._id}`)    
                                }}
                                key={lesson._id}>
                                <a className={`nav-link
                                    ${(this.state.editingLessonId === lesson._id || this.state.selectedLessonId === lesson._id)?'active': ''}`}>
                                    {
                                        this.state.editingLessonId !== lesson._id &&
                                        <span>
                                            <span className="mr-2">{lesson.title}</span>
                                            <span onClick={()=>{this.setState({
                                                lesson: lesson,
                                                editingLessonId: lesson._id})}}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </span>
                                        </span>
                                    }
                                    {
                                        this.state.editingLessonId === lesson._id &&
                                        <span>
                                            <input onChange={(e) => {
                                                const newTitle = e.target.value
                                                this.setState(prevState => ({
                                                    lesson: {
                                                        ...prevState.lesson,
                                                        title: newTitle
                                                    }
                                                }))
                                            }}
                                            value={this.state.lesson.title}/>
                                            <span>
                                                <span onClick={()=> {
                                                    this.props.deleteLesson(lesson._id)
                                                    .then(() =>
                                                        this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}`)
                                                    )
                                                }}>
                                                    <i className="fas fa-trash-alt mr-1"></i>
                                                </span>
                                                <span onClick={()=>this.props.updateLesson(this.state.lesson)
                                                    .then(()=>this.setState(
                                                        {editingLessonId:''}))}>
                                                    <i className="fas fa-check"></i>
                                                </span>
                                            </span>
                                        </span>
                                    }
                                </a>
                            </li>)
                    }
                    <li className="nav-item mx-2 my-1 py-0 px-2">
                        <a onClick={()=>this.props.addLesson(this.props.moduleId)} className="nav-link wbdv-new-page-btn">+</a>
                    </li>
                </ul>
            </div>
        )
    }
}
    
const stateToPropertyMapper = (state) => ({
    lessons: state.lessons.lessons
})

const dispatcherToPropertyMapper = (dispatcher) => ({
    findLessonsForModule: moduleId =>
        findLessonsForModule(moduleId)
            .then(lessons => dispatcher(
                findLessonsForModuleAction(lessons)
            )),
    updateLesson: async (lesson) => {
        updateLesson(lesson)
        .then(result => 
            dispatcher(updateLessonAction(lesson)))
    },
    addLesson: (moduleId) => 
        createLesson(moduleId)
        .then(actualLesson =>
            dispatcher(createLessonAction(actualLesson))),
    deleteLesson: async (lessonId) =>
        deleteLesson(lessonId)
        .then(status =>
            dispatcher({
                type: DELETE_LESSON,
                lessonId: lessonId
            })),
    findAllLessons: () =>
        findAllLessons()
            .then(lessons =>
                dispatcher(findAllLessonsAction(lessons))
            )
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(LessonTabsStatefulComponent)