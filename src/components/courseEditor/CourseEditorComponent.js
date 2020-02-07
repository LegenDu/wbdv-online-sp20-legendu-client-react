import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsComponent"

const CourseEditorComponent = () =>
    <div>
       <h3>CourseEditor</h3>
       <div className="row">
            <div className="col-3">
                <ModuleListComponent 
                    modules={[
                        {title: 'CS5610'},
                        {title: 'CS4550'}
                    ]}/> 
            </div>
            <div className="col-9">
                <LessonTabsComponent 
                    lessons = {[
                        {title: 'lesson 1'},
                        {title: 'lesson 2'}
                    ]}/>
                {/* <TopicPillsComponent /> */}
                {/* <WidgetListComponent /> */}
            </div>

       </div>
       
        
    </div>

export default CourseEditorComponent