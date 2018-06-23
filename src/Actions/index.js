
export const ADDTOCART=(task)=>{
    return {
        type: 'ADD',
        payload:task
    };
}
export const REMOVE=(taskid)=>{
    return {
        type: 'DELETE_TASK',
        payload:taskid
    };
}
