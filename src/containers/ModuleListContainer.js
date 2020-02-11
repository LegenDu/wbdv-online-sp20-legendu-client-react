  
import React from "react";
import {connect} from "react-redux";
import {createModule, findModuleForCourse} from "../services/ModuleService";
import {findModulesForCourseAction, createModuleAction} from "../actions/ModuleActions";
import ModuleListComponent from "../components/courseEditor/ModuleListComponent";

const stateToPropertyMapper = (state) => ({
    modules: state.modules.modules
})

const dispatchToPropertyMapper = (dispatch) => ({
    createModule: (courseId, module) =>
        createModule(courseId, module)
            .then(actualModule =>
                dispatch(createModuleAction(actualModule))),
    findModulesForCourse: (courseId) =>
        findModuleForCourse(courseId)
            .then(modules =>
                dispatch(findModulesForCourseAction(modules)))
})

const ModuleListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleListComponent)

export default ModuleListContainer