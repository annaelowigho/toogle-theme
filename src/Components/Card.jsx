import React from 'react'
import { IoStar } from "react-icons/io5";;

function Card() {
  return (
    <div className='w-1/4 m-auto mt-10 bg-white border border-gray-200 rounded-lg 
    shadow dark:bg-gray-800 dark:border-gray-700'>
        <div>
            <a href="/">
                <img src="https://images.pexels.com/photos/440320/pexels-photo-440320.jpeg?auto=compress&cs=tinysrgb&w=600" alt="photo" 
                className='p-8 rounded-t-lg'
                />
            </a>
        </div>
        <div className='px-7'>
            <a href="/">
                <p 
                className='text-xl font-semibold tracking-tighter text-gray-900 dark:text-white'>
                Apple Watch Series 7 GPS, Aluminium <br/>  Case, Starlight Sport</p>
            </a>
            <div className='flex gap-3 mt-2.5 mb-5'>
                <div className='flex items-center gap-1'>
                    <IoStar className='text-yellow-300'/>
                    <IoStar className='text-yellow-300'/>
                    <IoStar className='text-yellow-300'/>
                    <IoStar className='text-yellow-300'/>
                    <IoStar className='text-gray-200'/>
                </div>
                <div className='bg-blue-200 rounded-md text-blue-800 pl-3 pr-3 font-semibold'>4.0</div>
            </div>
            <div className='flex justify-between mb-4'>
                <p className='text-gray-950 font-extrabold text-[20px]'>$599</p>
                <div className='text-white bg-blue-800 pl-5 pr-5 pt-2 pb-2 rounded-md'>Add to cart</div>
            </div>
        </div>

    </div>
  )
}

export default Card