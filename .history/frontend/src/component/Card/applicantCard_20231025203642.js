import React from 'react'
import { useSelector } from 'react-redux';

const ApplicantCard = ({applicant}) => {

    const {jobHistory} = applicant;

    const creator = useSelector(state => state.userProfile);
    console.log("creator -- > ", creator);

    const creatorId = creator.userInfo._id;

    console.log(jobHistory);

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
    </div>
  )
}

export default ApplicantCard