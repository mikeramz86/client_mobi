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


export const getJobList = () => dispatch => {
    fetch (`${API_BASE_URL}/jobs`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
          }

    })
        .then(res => {
            console.log('result', res);
        })
}


//look into axios 