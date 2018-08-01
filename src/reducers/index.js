import {
    JOB_GET,
    DELETE_JOB_SUCCESS,
    UPDATE_JOB_SUCCESS,
    JOB_POST

} from '../actions/index';

const initialState = {
    user: {},
    jobs: []
};

const reducer = (state = initialState, action) => {
    if (action.type === JOB_POST) {
        return Object.assign({}, state, {
            jobs: [...state.jobs,
            action.payload
            ]
        });
    }

    if (action.type === JOB_GET) {
        return Object.assign({}, state, {
            jobs: action.payload
        })
    }

    if (action.type === DELETE_JOB_SUCCESS) {
        let jobsArray = [...state.jobs]
        let deletedIndex = jobsArray.findIndex(item => item.id === action.id);

        jobsArray.splice(deletedIndex, 1);
        return Object.assign({}, state, {
            jobs: jobsArray
        });
    }

    if (action.type === UPDATE_JOB_SUCCESS) {
        let jobsArray = [...state.jobs]

        jobsArray.forEach(job => {
            if (job.id === action.values.id) {
                job = Object.assign(job, action.values)
            }
        })
        return Object.assign({}, state, {
            jobs: jobsArray
        })
    }


    return state;
};

export default reducer;