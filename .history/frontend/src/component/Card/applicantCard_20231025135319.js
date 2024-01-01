import React from 'react'

const applicantCard = ({name, email, date, jobname}) => {
  return (
    <div className='flex sp'>
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