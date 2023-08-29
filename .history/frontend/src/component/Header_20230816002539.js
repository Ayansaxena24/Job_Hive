import React from 'react'
import jobbg from '../images/jobbg.jpg'
import SearchInputEl from './searchInputEl'

const Header = () => {
  return (
    <div className='relative'>
        <img src = {jobbg} className='min-h-400 h-96 flex justify-center bg-gradient-to-r from-theme-secondary-main to-white'></img>
        <SearchInputEl className="top-0"/>
    </div>
  )
}

export default Header