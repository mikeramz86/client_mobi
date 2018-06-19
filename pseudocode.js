//=========================================
//     DASHBOARD
//=========================================



//=========================================
//     JOBS!!!!
//=========================================

//---------- ADD NEW JOB ------

function addNewJob() {
    if (clicked === clicked) {
        return `
        <form>
            <input>Company</input>
            <input>Job</input>
            <input>Stage</input>
            <input>Status</input>
            <input>Date</input>
            <input>Comp</input>
            <input>Company</input>
            <input>Pros</input>
            <input>Cons</input>
        </form>
        `
    };
}

//---------- Update JOB ------
    function updateJob() {
        if (updateButton === clicked) {
            return `
                <h1>Update Form </h1>
                <form>
                <input>Company</input>
                <input>Job</input>
                <input>Stage</input>
                <input>Status</input>
                <input>Date</input>
                <input>Comp</input>
                <input>Company</input>
                <input>Pros</input>
                <input>Cons</input>
            </form>
            `
        };
    }

    //---------- DELETE JOB ------

    function deleteJob() {
        if (deleteJobBtn === clicked) {
            alert('are you sure?');
            return `yes and delete job`
            return  `no and go back to dashboard`
        };
    };

//=========================================
//     1ST TOUCH
//=========================================

function firstTouch() {
    if(stage === frstouch) {
        return `put job into first touch stage`
    }
}

//=========================================
//     TPS
//=========================================

function tps() {
    if( stage === tps) {
        return `put job into TPS STAGE`
    }
}

//=========================================
//     OSI
//=========================================

function OSI() {
    if( stage === OSI) {
        return `put job into OSI STAGE`
    }
}

//=========================================
//     OTHER INTERVIEWS
//=========================================

function OTHER() {
    if( stage === OTHER) {
        return `put job into OTHER STAGE note: for third tps etc`
    }
}

//=========================================
//     ARCHIVED
//=========================================
function Archived() {
    if( stage === Archived) {
        return `put job into archived STAGE`
    }
}

