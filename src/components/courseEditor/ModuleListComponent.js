import React from "react";
import ModuleListItemComponent from "./ModuleListItemComponent";

const ModuleListComponent = ({modules}) =>
    <ul>
        {
            modules.map(module => 
                <ModuleListItemComponent 
                module = {{title: module.title}}/>)
        }
        
    </ul>

export default ModuleListComponent