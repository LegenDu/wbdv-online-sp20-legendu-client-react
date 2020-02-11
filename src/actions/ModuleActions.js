export const FIND_MODULES_FOR_COURSE = "FIND_MODULE_FOR_COURSE"
export const findModulesForCourseAction = (modules) => ({
    type: FIND_MODULES_FOR_COURSE,
    modules: modules
})

export const CREATE_MODULE = "CREATE_MODULE"
export const createModuleAction = (module) => ({
    type: CREATE_MODULE,
    module: module
})

export const DELETE_MODULE = "DELETE_MODULE"
export const deleteModuleAction = (module) => ({
    type: DELETE_MODULE,
    module: module
})

export const UPDATE_MODULE = "UPDATE_MODULE"
export const updateModuleAction = (module) => ({
    type: UPDATE_MODULE,
    module: module,
    moduleId: module._id
})