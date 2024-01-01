import React from 'react'

const applicantCard = ({name, email, date, jobname}) => {
  return (
    <div>
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