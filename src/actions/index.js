import {API_BASE_URL} from '../config';

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
    fetch (`${API_BASE_URL}/jobs`, {
        method: "GET",
        // mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`
        }

    })
    // fetch (`${API_BASE_URL}/jobs`, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${authToken}`
    //       }

    // })
        .then(res => {
            console.log('get job result', res.json());
        })
}

// once its successful create an update joblist 
