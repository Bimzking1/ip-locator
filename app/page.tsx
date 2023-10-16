"use client";
import { PasswordField } from '@/components/passwordField';
import { useEffect, useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Footer from './components/footer';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
library.add(faEye, faEyeSlash)

export default function Home() {
  const router = useRouter();
  const [storageUsername, setStorageUsername] = useState<any>(localStorage.getItem("username"));
  const [storagePassword, setStoragePassword] = useState<any>(localStorage.getItem("password"));
  
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if ((storageUsername != null) && (storagePassword != null)){
      alert('Anda sudah login!')
      router.push('/home');
    }
  }, []);
  
  const handleSubmit = () => {
    if (((username == null) || (username == "")) || ((password == null) || (password == ""))){
      Swal.fire({
        icon: 'warning',
        title: 'Please fill the username or password!',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      router.push('/home');
      Swal.fire({
        icon: 'success',
        title: 'Login successful',
        showConfirmButton: false,
        timer: 1500
      })
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 px-24 bg-gray-100">
      <div className="md:w-[600px] lg:w-[850px]">
        <div className='bg-zinc-800 hover:bg-zinc-900 duration-300 text-gray-100 font-bold w-fit px-3 py-4 rounded-full'>
          logo
        </div>
      </div>

      <div className="grid place-items-center">
        <div className='text-4xl mt-4 sm:mt-0 mb-8 font-bold text-gray-800'>
          Sign In
        </div>
        <div className='bg-white text-gray-800 p-4 rounded-lg md:w-[600px] lg:w-[850px]'>
          <div className='mb-4'>
            <div className='mb-2 font-bold'>
              Email or Phone Number
            </div>
            <div>
              <input
                value={username}
                className='border border-gray-300 w-full py-2 pl-4 rounded-lg' 
                type="text"
                placeholder='Enter ANY email address or phone number'
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className='mb-4'>
            <div className='mb-2 font-bold'>
              Password
            </div>
            <div>
              <PasswordField password={password} setPassword={setPassword} />
            </div>
          </div>
          <button className='w-full bg-teal-300 hover:bg-teal-500 duration-300 rounded-3xl py-2 my-2 text-white font-bold' onClick={handleSubmit}>Sign In</button>
        </div>
      </div>
      
      {/* Footer 2 */}
      <Footer/>
    </main>
  )
}
