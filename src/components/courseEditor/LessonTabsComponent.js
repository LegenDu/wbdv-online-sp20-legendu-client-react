import React from "react";

const LessonTabsComponent = ({lessons}) =>
    <div>
        <ul>
            {
                lessons.map(lesson => 
                    <li key={lesson._id}>{lesson.title}</li>)
            }
        </ul>
    </div>

export default LessonTabsComponent