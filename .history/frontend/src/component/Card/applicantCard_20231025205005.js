import React from 'react'
import { useSelector } from 'react-redux';

const ApplicantCard = ({applicant}) => {

    const {jobHistory} = applicant;

    const creator = useSelector(state => state.userProfile);
    
    const creatorId = creator.userInfo._id;
    console.log("creator -- > ", creatorId);

    console.log(jobHistory);

    const jobs = jobHistory.filter((job) => job.user === creatorId);
    console.log("job --> ", jobs);

  return (
    <div className='flex space-x-2'>
        <div>
            {applicant.firstName} {applicant.lastName}
        </div>
        <div>
            {applicant.date}
        </div>
        <div>
            {applicant.email}
        </div>
        <div>
            {applicant.jobname}
        </div>
        <div>
            {
                jobs.length && jobs.map((item, i) => <div>{item.jobname}</div>)
            }
        </div>
    </div>
  )
}

export default ApplicantCard