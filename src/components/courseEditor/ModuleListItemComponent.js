import React from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {COURSES_MODULES_API_URL, MODULES_API_URL} from "../../common/constants"
import {updateModule} from "../../services/ModuleService"

const ModuleListItemComponent = ({save, edit, change, editing, module, deleteModule, updateModule, active, select}) =>  
    <li className={`list-group-item wbdv-module-item my-2 mx-3 rounded ${active ? 'active': ''}`}
        onClick={select}>
        {
            !editing &&
            <span>
                <span className="wbdv-module-item-title">{module.title}</span>
                <span className="close wbdv-module-item-edit-btn"
                    onClick={edit}><small><i className="fas fa-pencil-alt"></i></small></span>
            </span> 
        }
        {
            editing &&
            <span>
                <span>
                    <input type="text" value={`${module.title}`}
                        onChange={(e) => {
                            const title = e.target.value
                            change(title)
                            }}
                        /></span>
                <span>
                    <span className="close wbdv-module-item-delete-btn"
                        onClick={() => deleteModule(module._id)}><small><i className="fas fa-trash-alt"></i></small></span>
                    <span className="close wbdv-module-item-save-btn pr-2"
                        onClick={() => {updateModule(module._id, module)
                                        .then(save)}}><i className="fas fa-check"></i></span>
                </span>
            </span>
        }   
    </li>


const stateToPropertyMapper = (state) => ({})

const dispatchToPropertyMapper = (dispatch) => ({
    deleteModule: (moduleId) => {
        fetch(`${MODULES_API_URL}/${moduleId}`, {method: 'DELETE'})
                .then(response => response.json())
                .then(status => dispatch({
                    type: 'DELETE_MODULE',
                    moduleId: moduleId
                }))
            },
    updateModule: async (moduleId, module) => {
        updateModule(moduleId, module)
            .then(module => dispatch({
                type: 'UPDATE_MODULE',
                module: module,
                moduleId: module._id
            }))
    }
})

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleListItemComponent)