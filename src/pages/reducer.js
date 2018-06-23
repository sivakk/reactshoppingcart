import {ACTION} from '../Actions/index';



  const cartReducer=(state = [],action)=>{
    switch (action.type){
        case 'ADD':
            return [...state,action.payload]

        case 'REMOVE':
            const firstmatchIndex=state.indexOf(action.payload);
            return state.filter((item,index)=>index!==firstmatchIndex)

    }
    return state;
}

export default cartReducer;
