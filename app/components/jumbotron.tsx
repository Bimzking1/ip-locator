import React from 'react'

const jumbotron = () => {
  return (
    <>
      <div className='w-full flex justify-center h-[150px] mt-16 mb-4'>
        <a href="#searchbar" className='hover:brightness-125 rounded-lg text-gray-100 text-3xl pt-4 pl-8 mx-8 md:mx-32 font-bold bg-[url(/blue.png)] bg-no-repeat bg-cover w-full'>
          Searching Location by IP Address
        </a>
      </div>
      <div id="searchbar" className='w-full flex justify-center h-[100px] mb-16'>
        <a href="https://www.whatismyip.com/" target="_blank" className='hover:brightness-125 rounded-lg text-gray-100 text-xl pt-4 pl-8 mx-8 md:mx-32 font-bold bg-[url(/network.jpg)] bg-no-repeat bg-cover w-full'>
          Click here to find your IP
        </a>
      </div>
    </>
  )
}

export default jumbotron