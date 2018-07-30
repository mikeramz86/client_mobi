import { API_BASE_URL } from '../config';

export const JOB_GET = 'JOB_GET';
export const setJobList = jobs => ({
    type: JOB_GET,
    payload: jobs
});

export const postJob = (sendJob, authToken) => dispatch => {
    // console.log('action postJob working')
    fetch(`${API_BASE_URL}/jobs`, {
        body: JSON.stringify(sendJob),
        method: 'POST',
        headers: {
            // 'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`

        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
    // .then(jobs => {
    //     dispatch(addJobSuccess(sendJob));
    // })
};


export const getJobList = (authToken) => dispatch => {
    fetch(`${API_BASE_URL}/jobs`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => {
            return res.json();
        })
        .then(json => {
            dispatch(setJobList(json))
        })
        //add catch to this code refer to auth action code!!!
}


// once its successful create an update joblist 
