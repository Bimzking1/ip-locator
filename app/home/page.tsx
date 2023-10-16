"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import Image from 'next/image'
import style from './page.module.css'
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Jumbofooter from '../components/jumbofooter';
import Footer from '../components/footer';
import Banner from '../components/banner';
import Swal from 'sweetalert2';

const Page = () => {
  const [findIP, setFindIP] = useState<any>("");
  const [data, setData] = useState<any>();
  const YOUR_ACCESS_KEY = '5d22f6cd74ab1c69100f0f19c534b520'

  const handleFindIP = async () => {
    const axios = require('axios');

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://api.ipstack.com/${findIP}?access_key=${YOUR_ACCESS_KEY}`,
      headers: { }
    };
    
    await axios.request(config)
    .then((response: { data: true; }) => {
      setData(response.data)
      console.log('Response: ', response.data);
    })
    .catch((error: false) => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Connection problem. Please try again.',
        showConfirmButton: false,
        timer: 3000
      })
    });    
  }

  return (
    <main className="flex flex-col items-center justify-between bg-gray-100">

      {/* Navbar */}
      <Navbar/>

      {/* Jumbotron */}
      <Jumbotron/>

      {/* Searchbar */}
      <div className='flex flex-col sm:flex-row justify-center mx-8 md:mx-32 w-full mb-8'>
        <input
          value={findIP}
          className='border border-gray-300 w-auto py-2 mx-8 sm:mx-0 sm:ml-8 sm:mr-4 sm:w-full md:ml-32 pl-4 rounded-full' 
          type="text"
          placeholder='Search any valid IP ( ex: 66.249.70.162 )'
          onChange={(e) => setFindIP(e.target.value)}
        />
        <button onClick={handleFindIP} className='flex justify-center h-[40px] sm:h-auto flex items-center mt-4 sm:mt-0 mx-8 sm:mx-0 sm:mr-8 sm:px-8 md:mr-32 border rounded-full border-sky-500 text-md text-gray-100 font-bold bg-sky-500 hover:bg-gray-100 hover:text-sky-500 duration-300'>
          Find
        </button>
      </div>

      {/* IP Result */}
      {
        data == null ?
        <></>
        :
        <div className='w-full px-8 md:px-32 text-xl sm:flex'>
          <div className={`${style.result} w-full sm:w-3/5 lg:w-2/3`}>
  
            {/* Title */}
            <div className='mb-4 flex text-2xl'>
              <div className=''>
                Result for:
              </div>
              <div className='ml-2 font-bold'>
                "{data.ip}"
              </div>
            </div>
  
            {/* IP Status */}
            <div className='font-bold'>
              IP Status
            </div>
            <div className='flex'>
              <div>
                IP:
              </div>
              <div className='ml-2 font-bold text-blue-600'>
                "{data.ip}"
              </div>
            </div>
            <div className='flex'>
              <div>
                Type:
              </div>
              <div className='ml-2 font-bold text-blue-600'>
                "{data.type}"
              </div>
            </div>
  
            {/* Geological Status */}
            <div className='font-bold mt-4'>
              Geological Status
            </div>
            <div className='flex'>
              <div>
                City
              </div>
              <div className='ml-2 font-bold text-green-600'>
                "{data.city}"
              </div>
            </div>
            <div className='flex'>
              <div>
                Continent Code
              </div>
              <div className='ml-2 font-bold text-green-600'>
                "{data.continent_code}"
              </div>
            </div>
            <div className='flex'>
              <div>
                Continent Name
              </div>
              <div className='ml-2 font-bold text-green-600'>
                "{data.continent_name}"
              </div>
            </div>
            <div className='flex'>
              <div>
                Country Code
              </div>
              <div className='ml-2 font-bold text-green-600'>
                "{data.country_code}"
              </div>
            </div>
            <div className='flex'>
              <div>
                Country Name
              </div>
              <div className='ml-2 font-bold text-green-600'>
                "{data.country_name}"
              </div>
            </div>
            <div className='flex items-center'>
              <div>
                Country Flag:
              </div>
              <div className='ml-2'>
                {
                  (data.location.country_flag === null) ?
                  <>null</>
                  :
                  <Image
                    src={`${data.location.country_flag}`}
                    width={20}
                    height={20}
                    alt="Flag"
                  />
                }
              </div>
            </div>
            <div className='flex'>
              <div>
                Geoname ID
              </div>
              <div className='ml-2 font-bold text-purple-600'>
                {data.location.geoname_id}
              </div>
            </div>
  
            {/* Coordinates */}
            <div className='font-bold mt-4'>
              Coordinates
            </div>
            <div className='flex'>
              <div>
                Longitude:
              </div>
              <div className='ml-2 font-bold text-orange-600'>
               {data.longitude}
              </div>
            </div>
            <div className='flex'>
              <div>
                Latitude:
              </div>
              <div className='ml-2 font-bold text-orange-600'>
                {data.latitude}
              </div>
            </div>
  
            {/* State and Region Status */}
            <div className='font-bold mt-4'>
              State and Region Status
            </div>
            <div>
              <div className='flex'>
                <div>
                  Calling Code:
                </div>
                <div className='ml-2 font-bold text-green-600'>
                  "+{data.location.calling_code}"
                </div>
              </div>
              <div className='flex'>
                <div>
                  Capital:
                </div>
                <div className='ml-2 font-bold text-green-600'>
                  "{data.location.capital}"
                </div>
              </div>
              <div className='flex'>
                <div>
                  Region Code:
                </div>
                <div className='ml-2 font-bold text-green-600'>
                  "{data.region_code}"
                </div>
              </div>
              <div className='flex'>
                <div>
                  Region Name:
                </div>
                <div className='ml-2 font-bold text-green-600'>
                  "{data.region_name}"
                </div>
              </div>
              <div className='flex'>
                <div>
                  Zip code:
                </div>
                <div className='ml-2 font-bold text-purple-600'>
                  "{data.zip}"
                </div>
              </div>
            </div>
            <div className='flex'>
              <div>
                Language:
              </div>
                {
                  (data.location.languages === null) ?
                  <>null</>
                  :
                  <div className='ml-2 font-bold text-green-600'>
                    "{data.location.languages[0].native}"
                  </div>
                }
            </div>
          </div>
          <div className='sm:flex sm:flex-col sm:w-2/5 lg:w-1/3 mt-8 sm:mt-0'>
            <a href="https://www.facebook.com/vanverglobal" className='flex items-center mb-4 hover:bg-gray-300 duration-300 rounded-full hover:p-2'>
              <div>
                <Image
                  src="/facebook.png"
                  width={40}
                  height={40}
                  alt="Facebook"
                />
              </div>
              <div className='ml-4 w-full flex justify-between items-center'>
                <div>
                  Hi-Fella
                </div>
                <div className='text-xs font-bold py-2 px-4 rounded-full hover:bg-sky-300 duration-300 hover:text-gray-100'>
                  Like
                </div>
              </div>
            </a>
            <a href='https://www.instagram.com/hifella_/' target="_blank" className='flex items-center mb-4 hover:bg-gray-300 duration-300 rounded-full hover:p-2'>
              <div className='rounded-full'>
                <Image
                  src="/instagram.png"
                  width={40}
                  height={40}
                  alt="Instagram"
                />
              </div>
              <div className='ml-4 w-full flex items-center justify-between'>
                <div>
                  hifella_
                </div>
                <div className='text-xs font-bold py-2 px-4 rounded-full hover:bg-sky-300 duration-300 hover:text-gray-100'>
                  Follow
                </div>
              </div>
            </a>
            <a href='https://www.youtube.com/@Hi_Fella' target="_blank" className='flex items-center hover:bg-gray-300 duration-300 rounded-full hover:p-2'>
              <div>
                <Image
                  src="/youtube.png"
                  width={40}
                  height={40}
                  alt="Youtube"
                />
              </div>
              <div className='ml-4 w-full flex items-center justify-between'>
                <div>
                  Hi_Fella
                </div>
                <div className='text-xs font-bold py-2 px-4 rounded-full hover:bg-sky-300 duration-300 hover:text-gray-100'>
                  Subscribe
                </div>
              </div>
            </a>
          </div>
        </div>
      }

      {/* Blank Links */}
      {
        data == null ?
        <div className='w-full md:w-2/3 xl:w-1/2 flex flex-col sm:flex-row items-center justify-around mx-8 mt-8'>
          <a href="https://www.facebook.com/vanverglobal" target="_blank" className='flex items-center mb-4 sm:mb-0 hover:bg-gray-300 duration-300 rounded-full hover:py-2 hover:px-4'>
            <div>
              <Image
                src="/facebook.png"
                width={40}
                height={40}
                alt="Facebook"
              />
            </div>
            <div className='ml-4'>
              Hi-Fella
            </div>
          </a>
          <a href='https://www.instagram.com/hifella_/' target="_blank" className='flex items-center mb-4 sm:mb-0 hover:bg-gray-300 duration-300 rounded-full hover:py-2 hover:px-4'>
            <div>
              <Image
                src="/instagram.png"
                width={40}
                height={40}
                alt="Instagram"
              />
            </div>
            <div className='ml-4'>
              hifella_
            </div>
          </a>
          <a href='https://www.youtube.com/@Hi_Fella' target="_blank" className='flex items-center hover:bg-gray-300 duration-300 rounded-full hover:py-2 hover:px-4'>
            <div>
              <Image
                src="/youtube.png"
                width={40}
                height={40}
                alt="Youtube"
              />
            </div>
            <div className='ml-4'>
              Hi_Fella
            </div>
          </a>
        </div>
        :
        <></>
      }

      {/* Banner */}
      <Banner/>
      
      {/* Footer 1 */}
      <Jumbofooter/>

      {/* Footer 2 */}
      <Footer/>
    </main>
  )
}

export default Page