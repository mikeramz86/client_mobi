import { API_BASE_URL } from '../config';

export const JOB_GET = 'JOB_GET';

export const setJobList = jobs => ({
    type: JOB_GET,
    payload: jobs
});

//-------------------------------------POST -------------------------------------

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
        .catch(error => console.error(error))

};

//-------------------------------------GET -------------------------------------

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
        .catch(error => console.error(error))

        //add catch to this code refer to auth action code!!!
}

//-------------------------------------PUT-------------------------------------

export const updateJob = (updateJob, authToken) => dispatch => {
    // console.log('action postJob working')
    fetch(`${API_BASE_URL}/jobs`, {
        body: JSON.stringify(updateJob),
        method: 'PUT',
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
        .catch(error => console.error(error))
};

export const UPDATE_JOB_SUCCESS = "UPDATE_JOB_SUCCESS";
export const updateJobSuccess = data => ({
    type: UPDATE_JOB_SUCCESS,
    values: data

})

//-------------------------------------DELETE -------------------------------------

export const deleteJob = (values, authToken, id) => dispatch => {
      fetch(`${API_BASE_URL}/jobs/${id}`, {
        method: "delete",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        }
      })
      .then(() => dispatch(deleteJobSuccess(id)))
      .catch(err => console.log(err))
  };
  
  export const DELETE_JOB_SUCCESS = "DELETE_JOB_SUCCESS";
  export const deleteJobSuccess = id => ({
    type: DELETE_JOB_SUCCESS,
    id
  })
// once its successful create an update joblist 
