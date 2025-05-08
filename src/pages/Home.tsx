import React from 'react'
import PrimaryBlue from '../component/PrimaryBlue'
import PrimaryRound from '../component/PrimaryRound'
import ByDribble from '../component/ByDribble'

const Home:React.FC = () => {
  return (
    <div className='mt-14 flex flex-row justify-around '>
      <PrimaryBlue />
      <PrimaryRound />
      <ByDribble />
    </div>
  )
}

export default Home
