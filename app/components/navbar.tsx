import { useRouter } from 'next/navigation';
import { useState } from 'react'
import Swal from 'sweetalert2';

const navbar = () => {
    const router = useRouter();
    const [username, setUsername] = useState<any>(localStorage.getItem("username"));
  
    const handleLogout = () => {
      localStorage.clear();
      router.push('/');
      Swal.fire({
        icon: 'success',
        title: 'Logout successful',
        showConfirmButton: false,
        timer: 1500
      })
    };
    
    return (
        <>
            {/* Navbar */}
            <div className="bg-white flex justify-between items-center w-full py-2">
            <div className='ml-8 bg-zinc-800 hover:bg-zinc-900 duration-300 text-gray-100 font-bold w-fit px-3 py-4 rounded-full'>
                logo
            </div>
            <div className='flex items-center'>
                <div className='hidden sm:flex font-bold text-sky-500'>
                {username}
                </div>
                <div onClick={handleLogout} className='h-[40px] flex items-center border rounded-full border-sky-500 text-md text-sky-500 font-bold px-4 mx-8 text-gray-800 hover:bg-sky-500 hover:text-gray-100 duration-300'>
                Sign Out
                </div>
            </div>
            </div>
        </>
    )
}

export default navbar