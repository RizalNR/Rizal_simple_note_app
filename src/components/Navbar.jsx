import React from 'react'
import { FiHome, FiUpload, FiDelete } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen h-20 flex flex-col justify-center items-center fixed bottom-0 left-0 p-4'>

        <nav className='w-full h-full bg-green-500 text-white flex justify-beetwen items-center rounded-full'>
            <Link to={"/note"} className='flex-1 h-full flex justify-center items-center text-white'>
                <FiHome/>
            </Link>

            <Link to={"/addnote"} className='flex-1 h-full flex justify-center items-center text-white'>
                <FiUpload/>
            </Link>

            <div className='flex-1 h-full flex justify-center items-center text-white'>
                <FiDelete/>
            </div>
        </nav>

    </div>
  )
}

export default Navbar