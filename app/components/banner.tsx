import React from 'react'
import style from "./../home/page.module.css"

const banner = () => {
  return (
    <>
      {/* Lower Banner 1 */}
      <div className='w-full flex justify-center items-center mt-16 hover:brightness-125 duration-300'>
        <div className={`${style.backgroundOne} text-center md:text-right py-16 md:pr-32 w-full`}>
          <div className='text-gray-100 text-gray-100 text-2xl font-bold mb-4'>
            What can we help you with?
          </div>
          <div className=''>
            <input
              className='border border-gray-300 w-[200px] md:w-[400px] pl-4 py-2 rounded-full' 
              type="text"
              placeholder='Search'
            />
          </div>
        </div>
      </div>

      {/* Lower Banner 2 */}
      <div className='w-full mt-4'>
        <div className={`${style.backgroundTwo} w-full flex flex-col justify-center items-center py-32 hover:brightness-125 duration-300`}>
          <div className='text-gray-100 text-gray-100 text-3xl font-bold mb-4'>
            Trusted around the globe
          </div>
          <div className='bg-blue-600 py-2 px-8 hover:px-16 hover:py-4 rounded-full text-gray-100 text-xs font-bold hover:bg-blue-800 duration-300 hover:text-lg'>
            Join now for free
          </div>
        </div>
      </div>
    </>
  )
}

export default banner