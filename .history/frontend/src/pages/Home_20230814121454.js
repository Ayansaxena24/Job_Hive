import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'

const Home = () => {

  const { palette } = useTheme();

  return (
    <>
    
        <Navbar />
        <Header />
        <h1>Home Page</h1>
    </>
  )
}

export default Home