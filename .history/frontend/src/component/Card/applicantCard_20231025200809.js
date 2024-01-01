import React from 'react'

const ApplicantCard = ({name, email, date, jobname}) => {
  return (
    <div className='flex space-x-2'>
        <div>
            {name}
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

export default applicantCard