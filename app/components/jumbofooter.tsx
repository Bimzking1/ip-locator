import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

const Jumbofooter = () => {
    const [language, setLanguage] = useState<any>("English (US)");
    const changeSelectOptionHandler = (event: { target: { value: any; }; }) => { 
        setLanguage(event.target.value); 
    }; 
    return (
    <>
    <div className='bg-blue-950 w-full text-gray-100 md:flex text-sm text-center md:text-left md:py-8 md:px-8 pb-8'>
        <div className='md:w-2/3 md:flex'>

            <div className='md:w-1/4 py-2 pt-8 md:pt-2 px-2 pl-4'>
            <div className='font-bold'>
                Logo
            </div>
            <div className='flex justify-center md:justify-start py-4 gap-2'>
                <a href='https://www.instagram.com/hifella_/' target="_blank">
                <FontAwesomeIcon icon={faInstagram} style={{ width: '20px', height: '20px' }}/>
                </a>
                <a href="https://www.facebook.com/vanverglobal" target="_blank">
                <FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff", width: '20px', height: '20px'}} />
                </a>
                <a href="https://www.facebook.com/vanverglobal" target="_blank">
                <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff", width: '20px', height: '20px' }} />
                </a>
            </div>
            </div>

            <div className='md:w-1/4 py-2 px-2'>
            <div className='font-bold'>
                General
            </div>
            <div className='md:py-1'>
                Register Account
            </div>
            <div className='md:py-1'>
                Help Center
            </div>
            <div className='md:py-1'>
                Blog
            </div>
            </div>

            <div className='md:w-1/4 py-2 px-2'>
            <div className='font-bold'>
                Discover
            </div>
            <div className='md:py-1'>
                People
            </div>
            <div className='md:py-1'>
                Companies
            </div>
            <div className='md:py-1'>
                Products
            </div>
            <div className='md:py-1'>
                Export-Import Database
            </div>
            <div className='md:py-1'>
                Quality Inspection
            </div>
            <div className='md:py-1'>
                Services
            </div>
            </div>

            <div className='md:w-1/4 py-2 px-2'>
            <div className='font-bold'>
                Products
            </div>
            <div className='md:py-1'>
                Download App
            </div>
            <div className='md:py-1'>
                Premium Pricing
            </div>
            <div className='md:py-1'>
                Create Ads
            </div>
            </div>

        </div>

        <div className='md:w-1/3 py-2 pb-4 px-2 pr-4 flex flex-col items-center md:items-end'>
            <div className='w-1/2 text-left font-bold text-xs mb-2'>
            Language
            </div>
            <select onChange={changeSelectOptionHandler} aria-label="Static Actions" className='bg-white hover:bg-gray-300 duration-300 rounded-lg text-gray-800 py-2 px-4 w-1/2 text-left text-sm'>
            <option key="new" value="English (US)">English (US)</option>
            <option key="copy" value="Bahasa Indonesia">Bahasa Indonesia</option>
            </select>
        </div>
        </div>
    </>
    )
}

export default Jumbofooter