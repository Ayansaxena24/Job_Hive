import React from 'react'

const ApplicantCard = ({applicant}) => {
  return (
    <div className='flex space-x-2'>
        <div>
            {applicant.firstName} {lastName}
        </div>
        <div>
            {date}
        </div>
        <div>
            {email}
        </div>
        <div>
            {jobname}
        </div>
    </div>
  )
}

export default ApplicantCard