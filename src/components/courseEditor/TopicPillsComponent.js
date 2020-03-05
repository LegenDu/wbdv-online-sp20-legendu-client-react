import React from "react";
import { connect } from "react-redux";
import {findTopicsForLesson, updateTopic, createTopic, deleteTopic} from "../../services/TopicService"
import {DELETE_TOPIC} from "../../actions/TopicActions"
import {findTopicsForLessonAction, updateTopicAction, createTopicAction} from "../../actions/TopicActions"

class TopicPillsComponent extends React.Component {
    componentDidMount() {
        this.props.findTopicsForLesson(this.props.lessonId)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.lessonId !== prevProps.lessonId || this.props.moduleId != prevProps.moduleId) {
            this.props.findTopicsForLesson(this.props.lessonId)
        }
    }
    state={
        selectedTopicId : '',
        editingTopicId : ''
    }

    createTopic = () =>{
        const topic = {
            title: "New Topic",
            lessonId: this.props.lessonId
        }
        this.props.addTopic(this.props.lessonId, topic)
    }

    render() {
        return (
            <ul className="nav nav-pills wbdv-topic-pill-list">
                {
                    this.props.topics && this.props.topics.map(topic => 
                        <li className="nav-item wbdv-topic-pill"
                            onClick={() => {
                                this.setState({
                                    selectedTopicId: topic.id
                                })
                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topic.id}`)
                            }}
                            key={topic.id}>
                            <span className={`nav-link btn py-0 mx-1 border
                                ${(this.state.editingTopicId === topic.id || this.state.selectedTopicId === topic.id)?'active':''}`}>
                                {
                                    this.state.editingTopicId !== topic.id &&
                                    <span>
                                        <span className="mr-1" >{topic.title}</span>
                                        <span onClick={() => {this.setState({
                                            topic: topic,
                                            editingTopicId: topic.id
                                            })}}>
                                            <i className="fas fa-pencil-alt"/>
                                        </span>
                                    </span>    
                                }
                                {
                                    this.state.editingTopicId === topic.id &&
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
                                                this.props.deleteTopic(topic.id)
                                                .then(
                                                    this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic`))
                                                }}>
                                                <i className="fas fa-trash-alt mr-1"/>
                                            </span>
                                            <span onClick={()=>this.props.updateTopic(this.state.topic)
                                                .then(()=>this.setState({editingTopicId:''}))}>
                                                <i className="fas fa-check"/>
                                            </span>
                                        </span>
                                    </span>
                                }
                            </span>
                        </li>
                    )
                }
                <li className="nav-item wbdv-topic-pill">
                    <span className="nav-link wbdv-topic-add-btn btn py-0 px-2 mx-1 border"
                        onClick={()=>this.createTopic()}>+</span>
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
    addTopic: (lessonId, topic) =>
        createTopic(lessonId, topic)
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