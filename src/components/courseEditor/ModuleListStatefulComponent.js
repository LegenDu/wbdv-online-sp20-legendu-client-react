import React from "react";
import ModuleListItemComponent from "./ModuleListItemComponent";

export default class ModuleListStatefulComponent extends React.Component {
    componentDidMount() {
        this.props.courseId && this.props.findModulesForCourse(this.props.courseId)
    }

    state = {
        activeModuleId: '',
        editingModuleId:'',
        title: ''
    }

    render() {
        return (
            <ul className="list-group wbdv-module-list">
                {
                    this.props.modules && this.props.modules.map(module => 
                        <ModuleListItemComponent 
                            key={module._id}
                            edit={() => {
                                const moduleId = module._id
                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
                                this.setState({
                                    editingModuleId: module._id
                                })
                            }}
                            select={() => {
                                const moduleId = module._id
                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
                                this.setState({
                                    activeModuleId: module._id
                                })
                            }}
                            save={() => this.setState({
                                editingModuleId: ''
                            })}
                            change={(newTitle)=>
                                module.title = newTitle
                            }
                            editing={module._id === this.state.editingModuleId}
                            active={module._id === this.state.activeModuleId}
                            module={module}
                            newTitle={this.state.newTitle}/>)
                }
                <li className="list-group-item my-2 mx-3 rounded wbdv-module-item-add-row pr-0">
                    <button className="btn btn-dark wbdv-module-item-add-btn"
                            onClick={() => this.props.createModule(this.props.courseId, {title: 'New Module'})}>+</button>
                </li>
            </ul>
        )
    }
}

// export default connect(
//     (state) => ({
//         modules: state.modules.modules
//     }),
//     (dispatch) => ({
//         createModule: (courseId) => {
//             createModule(courseId, {title: 'New Module'})
//             .then(actualModule => dispatch(createModuleAction(actualModule)))
//         },
//         findModulesForCourse: (courseId) => {
//             findModuleForCourse(courseId)
//             .then(modules => dispatch(findModulesForCourseAction(modules)))
//         }
//     })
// )(ModuleListStatefulComponent)