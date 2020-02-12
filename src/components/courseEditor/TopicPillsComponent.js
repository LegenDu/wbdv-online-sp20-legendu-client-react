import React from "react";
import { connect } from "react-redux";
import {findTopicsForLesson, updateTopic, createTopic, deleteTopic} from "../../services/TopicService"
import {FIND_TOPICS_FOR_LESSON, UPDATE_TOPIC, CREATE_TOPIC, DELETE_TOPIC} from "../../actions/TopicActions"
import {findTopicsForLessonAction, updateTopicAction, createTopicAction, deletetopicAction} from "../../actions/TopicActions"

class TopicPillsComponent extends React.Component {
    componentDidMount() {
        console.log("1. lessonid: ", this.props.lessonId)
        this.props.findTopicsForLesson(this.props.lessonId)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("2. lessonid: ", this.props.lessonId)
        console.log("2. moduleId: ", this.props.moduleId)
        if(this.props.lessonId !== prevProps.lessonId || this.props.moduleId != prevProps.moduleId) {
            this.props.findTopicsForLesson(this.props.lessonId)
        }
    }
    state={
        selectedTopicId : '',
        editingTopicId : ''
    }
    render() {
        return (
            <ul className="nav nav-pills wbdv-topic-pill-list">
                {
                    console.log('aaa: ', this.props.lessonId)
                }
                {
                    this.props.topics && this.props.topics.map(topic => 
                        <li className="nav-item wbdv-topic-pill"
                            onClick={() => {
                                this.setState({
                                    selectedTopicId: topic._id
                                })
                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topic._id}`)
                            }}
                            key={topic._id}>
                            <a className={`nav-link btn py-0 mx-1 border
                                ${(this.state.editingTopicId === topic._id || this.state.selectedTopicId === topic._id)?'active':''}`}>
                                {
                                    this.state.editingTopicId !== topic._id &&
                                    <span>
                                        <span>{topic.title}</span>
                                        <span onClick={() => {this.setState({
                                            topic: topic,
                                            editingTopicId: topic._id
                                        })}}>
                                            <i className="fas fa-pencil-alt"></i>
                                        </span>
                                    </span>    
                                }
                                {
                                    this.state.editingTopicId === topic._id &&
                                    <span>
                                        <input onChange={(e) => {
                                            const newTitle = e.target.value
                                            this.setState(prevState => ({
                                                topic: {
                                                    ...prevState.topic,
                                                    title: newTitle
                                                }
                                            }))
                                        }}
                                        value={this.state.topic.title} />
                                        <span>
                                            <span onClick={()=>{
                                                this.props.deleteTopic(topic._id)
                                                .then(
                                                    this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic`))
                                                }}>
                                                <i className="fas fa-trash-alt mr-1"></i>
                                            </span>
                                            <span onClick={()=>this.props.updateTopic(this.state.topic)
                                                .then(()=>this.setState({editingTopicId:''}))}>
                                                <i className="fas fa-check"></i>
                                            </span>
                                        </span>
                                    </span>
                                }
                            </a>
                        </li>
                    )
                }
                <li class="nav-item wbdv-topic-pill">
                    <a class="nav-link wbdv-topic-add-btn btn py-0 px-2 mx-1 border"
                        onClick={()=>this.props.addTopic(this.props.lessonId)}>+</a>
                </li>
            </ul>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    topics: state.topics.topics
})

const dispatchToPropertyMapper = (dispatch) => ({
    findTopicsForLesson: topicId =>
        findTopicsForLesson(topicId)
        .then(lessons => dispatch(
            findTopicsForLessonAction(lessons)
        )),
    updateTopic: async (topic) => {
        updateTopic(topic)
        .then(result => 
            dispatch(updateTopicAction(topic)))
        },
    addTopic: (lessonId) => 
        createTopic(lessonId)
        .then(actualTopic =>
            dispatch(createTopicAction(actualTopic))),
    deleteTopic: async (topicId) =>
        deleteTopic(topicId)
        .then(status =>
            dispatch({
                type: DELETE_TOPIC,
                topicId: topicId
        }))
})

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(TopicPillsComponent)