import React from 'react'

const Header = () => {
  return (
    <nav className=' w-full h-[7vh] border shadow-md flex justify-evenly items-center'>
      <div>
        LOGO
      </div>
      <ul className=' flex justify-between w-[30%]'>
        <li>Home</li>
        <li>New Updates</li>
        <li>Github</li>
      </ul>
    </nav>
  )
}

export default Header
