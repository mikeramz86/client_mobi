import {
    JOB_GET
} from '../actions/index';

const initialState = {
    user: {},
    jobs: []
};

const reducer = (state=initialState, action) => {
    if (action.type === action.JOB_FETCH) {
        return Object.assign({}, state, {
            jobs: [...state.jobs, 
                action.job
            ]
        });
    }
    
    if (action.type === JOB_GET) {
        return Object.assign({}, state, {
            jobs:  action.payload            
        })
    }
    return state;
};

export default reducer;