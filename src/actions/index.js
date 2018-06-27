import {API_BASE_URL} from '../components/config';

export const postJob = (sendJob) => dispatch => {
    // console.log('action postJob working')
    fetch(`${API_BASE_URL}/jobs`, {
        body: JSON.stringify(sendJob),
        method: 'POST',
        headers: {
            // 'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
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


//look into axios 