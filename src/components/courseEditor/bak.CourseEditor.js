
import React from 'react'
import './course-editor.style.client.css'

class CourseEditorComponent extends React.Component{
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <div className="navbar wbdv-course-navbar navbar-expand-lg navbar-dark">
                    <div className="mx-4">
                        <a className="btn btn-dark wbdv-course-editor wbdv-close" href="#"
                            onClick={() => this.props.closeEditCoursePage()}>✕</a>
                    </div>
                    <a className="navbar-brand wbdv-course-title" href="#">{this.props.courseTitle}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-2 my-1 py-0 px-4">
                                <a className="nav-link" href="#">Build<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item mx-2 my-1 py-0 px-4 active">
                                <a className="nav-link wbdv-page-tab" href="#">Pages</a>
                            </li>
                            <li className="nav-item mx-2 my-1 py-0 px-4">
                                <a className="nav-link wbdv-page-tab" href="#">Theme</a>
                            </li>
                            <li className="nav-item mx-2 my-1 py-0 px-4">
                                <a className="nav-link wbdv-page-tab" href="#">Store</a>
                            </li>
                            <li className="nav-item mx-2 my-1 py-0 px-4">
                                <a className="nav-link wbdv-page-tab" href="#">Apps</a>
                            </li>
                            <li className="nav-item mx-2 my-1 py-0 px-4">
                                <a className="nav-link wbdv-page-tab" href="#">Settings</a>
                            </li>
                            <li className="nav-item mx-2 my-1 py-0 px-2">
                                <a className="nav-link wbdv-new-page-btn" href="#">+</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container-fluid mx-0 px-0">
                    <div className="row" id="wbdv-module-div">
                        <div className="col-lg-3 wbdv-module-col">
                            <ul className="list-group wbdv-module-list">
                                <li className="list-group-item wbdv-module-item my-2 mx-3 rounded">
                                    <span className="wbdv-module-item-title">Module 1 - jQuery</span>
                                    <span className="close wbdv-module-item-delete-btn">x</span>
                                </li>
                                <li className="list-group-item wbdv-module-item my-2 mx-3 rounded active">
                                    <span className="wbdv-module-item-title">Module 2 - React</span>
                                    <span className="close wbdv-module-item-delete-btn">x</span>
                                </li>
                                <li className="list-group-item wbdv-module-item my-2 mx-3 rounded">
                                    <span className="wbdv-module-item-title">Module 3 - Redux</span>
                                    <span className="close wbdv-module-item-delete-btn">x</span>
                                </li>
                                <li className="list-group-item wbdv-module-item my-2 mx-3 rounded">
                                    <span className="wbdv-module-item-title">Module 4 - Native</span>
                                    <span className="close wbdv-module-item-delete-btn">x</span>
                                </li>
                                <li className="list-group-item wbdv-module-item my-2 mx-3 rounded">
                                    <span className="wbdv-module-item-title">Module 5 - Angular</span>
                                    <span className="close wbdv-module-item-delete-btn">x</span>
                                </li>
                                <li className="list-group-item wbdv-module-item my-2 mx-3 rounded">
                                    <span className="wbdv-module-item-title">Module 6 - Node</span>
                                    <span className="close wbdv-module-item-delete-btn">x</span>
                                </li>
                                <li className="list-group-item wbdv-module-item my-2 mx-3 rounded">
                                    <span className="wbdv-module-item-title">Module 7 - Mongo</span>
                                    <span className="close wbdv-module-item-delete-btn">x</span>
                                </li>
                                <li className="list-group-item my-2 mx-3 rounded wbdv-module-item-add-row pr-0">
                                    <button className="btn btn-dark wbdv-module-item-add-btn">+</button>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="col-lg-9">
                            <div className="mt-3">
                                <ul className="nav nav-pills wbdv-topic-pill-list">
                                    <li className="nav-item wbdv-topic-pill">
                                        <a href="" className="nav-link btn py-0 mx-1 border">Topic 1</a>
                                    </li>
                                    <li className="nav-item wbdv-topic-pill">
                                        <a href="" className="nav-link btn py-0 mx-1 border active">Topic 2</a>
                                    </li>
                                    <li className="nav-item wbdv-topic-pill">
                                        <a href="" className="nav-link btn py-0 mx-1 border">Topic 3</a>
                                    </li>
                                    <li className="nav-item wbdv-topic-pill">
                                        <a href="" className="nav-link btn py-0 mx-1 border">Topic 4</a>
                                    </li>
                                    <li className="nav-item wbdv-topic-pill">
                                        <a href="" className="nav-link wbdv-topic-add-btn btn py-0 px-2 mx-1 border">+</a>
                                    </li>
                                </ul>
                            </div>
                            <ul className="list-group">
                                <li className="list-group-item mb-0 d-flex justify-content-end">
                                    <div className="row">
                                        <button className="btn btn-success py-0 px-3">Save</button>
                                        <button className="btn ">Preview</button>
                                        <i className="fas fa-toggle-off fa-2x" id="toggle"></i>
                                    </div>
                                </li>
                                <div className="border rounded">
                                    <li className="list-group-item pb-0">
                                        <div className="row">
                                            <div className="col-6">
                                                <h5>Heading widget</h5>
                                            </div>
                                            <div className="col-6 d-flex justify-content-end">
                                                <div className="border px-2 py-1 mr-1 rounded">
                                                    <i className="fas fa-arrow-up"></i>
                                                </div>
                                                <div className="border px-2 py-1 mr-1 rounded">
                                                    <i className="fas fa-arrow-down"></i>
                                                </div>
                                                <select name="" id="" className="mr-1">
                                                    <option value="HEADING" defaultValue="selected">Heading</option>
                                                    <option value="PARAGRAPH">Paragraph</option>
                                                    <option value="LIST">List</option>
                                                    <option value="IMAGE">Image</option>
                                                </select>
                                                <div>
                                                    <i class="fas fa-times-circle fa-2x" style={{color: 'red'}}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex flex-column mt-0 pt-1">
                                        <input className="wbdv-widget-input" type="text" placeholder="Heading text"/>
                                    </li>
                                    <li className="list-group-item d-flex flex-column">
                                        <select className="wbdv-widget-input" name="" id="">
                                            <option value="HEADING-1">Heading 1</option>
                                            <option value="HEADING-2">Heading 2</option>
                                            <option value="HEADING-2">Heading 3</option>
                                            <option value="HEADING-2">Heading 4</option>
                                            <option value="HEADING-2">Heading 5</option>
                                            <option value="HEADING-2">Heading 6</option>
                                        </select>
                                    </li>
                                    <li className="list-group-item d-flex flex-column">
                                        <input className="wbdv-widget-input" type="text" placeholder="Widget name"/>
                                    </li>
                                    <li className="list-group-item d-flex flex-column pb-0">
                                        <h5 className="p-0">Preview</h5>
                                    </li>
                                    <li className="list-group-item d-flex flex-column pt-0">
                                        <h1 className="p-0">Heading text</h1>
                                    </li>
                                </div>
                            </ul>
                            <div className="d-flex justify-content-end mt-2">
                                <button className="btn d-flex justify-content-center mfr-0" id="wbdv-add-widget-btn">
                                    <i className="fas fa-plus-circle fa-add-btn p-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>   
                </div> 
                <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
            </div>
        )
    }
}

export default CourseEditorComponent
