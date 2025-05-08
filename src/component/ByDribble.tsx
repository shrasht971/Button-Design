import React from 'react'

const ByDribble:React.FC = () => {
    const handleClick = () => {
        alert("Button was clicked!");
        // Or navigate, log, etc.
      };
  return (
    <div className='flex  items-center '>
      <button onClick={handleClick} className='bg-gray-500 text-white border-blue-700 px-3 py-1 border-b-cyan-500 border-2 border-r-4 rounded-md hover:bg-cyan-900 hover:text-white transition'>Button</button>
    </div>
  )
}

export default ByDribble
