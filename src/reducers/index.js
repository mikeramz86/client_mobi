// import * as actions from '../actions';

const initialState = {
    user: {},
    jobs: []
};

export const reducer = (state=initialState, action) => {
    if (action.type === action.JOB_FETCH) {
        return Object.assign({}, state, {
            jobs: [...state.jobs, 
                action.job
            ]
        });
    }
    
    return state;
};