import React from 'react'
import Navbar from '../component/Navbar'

const NotFound = () => {
  return (
    <div className='h-screen'>
        <Navbar />
        <div className='flex justify-center items-center'>
        <h1 className='fort-semibold text-3xl'>Page Not Found</h1>
        </div>
    </div>
  )
}

export default NotFound