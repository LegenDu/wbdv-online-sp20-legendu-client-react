import React from "react";
// import ModuleListComponent from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsStatefulComponent";
import TopicPillsComponent from "./TopicPillsComponent"
import WidgetListComponent from "./WidgetListComponent"
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux"
import modules from '../../reducers/moduleReducer'
import lessons from '../../reducers/lessonReducer'
import topics from '../../reducers/topicReducer'
import widgets from '../../reducers/widgetReducer'
// import {findCourseById} from "../../services/CourseService"
import ModuleListContainer from "../../containers/ModuleListContainer"
import './course-editor.style.client.css'

const reducers = combineReducers({
    modules, lessons, topics, widgets
})

const store = createStore(reducers)

const CourseEditorComponent = ({match, courseId, moduleId, lessonId, history, courses, topicId}) =>
    <Provider store={store}>
        <div>
            <div className="navbar wbdv-course-navbar navbar-expand-lg navbar-dark">
                <div className="mx-4">
                    <Link to="/">
                        <button className="btn btn-dark wbdv-course-editor wbdv-close"
                                onClick={() => {
                                    history.push("/")
                                }}>✕</button>
                    </Link>
                </div>
                <span className="navbar-brand wbdv-course-title">
                    {
                        courses.map(course=>
                            course._id === courseId ? course.title: ''
                        )
                    }
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
                </button>
                <LessonTabsComponent
                    courseId={courseId}
                    moduleId={match.params.moduleId}
                    history={history}/>
            </div>

            <div className="container-fluid mx-0 px-0">
                <div className="row" id="wbdv-module-div">
                    <div className="col-lg-4 wbdv-module-col">
                        <ModuleListContainer
                            moduleId={moduleId}
                            history={history}
                            courseId={courseId}/>
                    </div>
                    <div className="col-lg-8 pl-0">
                        <div className="mt-3">
                            <TopicPillsComponent
                                courseId={courseId}
                                moduleId={match.params.moduleId}
                                lessonId={lessonId}
                                history={history}/>
                        </div>
                        <WidgetListComponent topicId={topicId}/>
                    </div>
                </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.3.1.min.js"/>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js"/>
        </div>
    </Provider>


export default CourseEditorComponent
