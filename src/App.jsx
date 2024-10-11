import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-around mt-4'>
        <div className='text-xs font-bold hover:cursor-pointer hover:text-gray-500'>Phone no: +00 1234 567 or email us: emailsample@email.com</div>
        <div className='text-xs font-bold hover:cursor-pointer hover:text-gray-500'>Phone no: +00 1234 567 or email us: emailsample@email.com</div>
      </div>
      <div className=' flex items-center justify-center bg-white h-20 w-5/6 mx-28 mt-8'>
        <div className='flex items-center justify-around gap-60'>
          <div className='text-2xl font-semibold text-custom-pink hover:cursor-pointer'>Petvet <br /><div className='text-base text-black'>Pet Care</div></div>
          <ul className='flex items-center justify-around gap-8'>
            <li className='hover:text-custom-pink hover:cursor-pointer'>Home</li>
            <li className='hover:text-custom-pink hover:cursor-pointer'>About</li>
            <li className='hover:text-custom-pink hover:cursor-pointer'>Groomers</li>
            <li className='hover:text-custom-pink hover:cursor-pointer'>Service</li>
            <li className='hover:text-custom-pink hover:cursor-pointer'>Blog</li>
            <li className='hover:text-custom-pink hover:cursor-pointer'>Price</li>
            <li className='hover:text-custom-pink hover:cursor-pointer'>Contact Us</li>
            <li>
              <div className='bg-custom-pink h-14 flex justify-center items-center w-40'>
                <p className='text-white font-bold  hover:text-black hover:cursor-pointer' >Free Consultation</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col mx-28 mt-20 h-96 items-start gap-10  text-left justify-center ">
        <div className='text-6xl font-semibold'>The Kind of Care <br /> Your Pets Deserve</div>
        <div className='text-base font-medium text-gray-500'>Far far away, behind the word mountains, far from the countries Vokalia <br />
          and Consonantia, there live the blind texts. Separated they live.</div>
        <div className='flex gap-4 '>
          <div className=' hover:bg-pink-500 hover:cursor-pointer h-14 flex justify-center items-center text-base w-48 rounded-xl border-none text-white font-normal bg-custom-pink '><p>Make An Appointment</p></div>
          <div className='hover:bg-transparent hover:cursor-pointer hover:border border-customGreen hover:text-customGreen font-medium h-14 flex justify-center items-center text-base w-48 rounded-xl text-white font-normal bg-customGreen'>
            <p>11-234-5678-9102</p>
          </div>
        </div>
      </div>
      <div className=' h-48 flex justify-evenly items-center '>
        <div className='bg-white h-40 w-1/4 flex flex-col gap-5 items-start '>
          <p className='text-3xl font-semibold mx-5 mt-5'>Veterinary Services</p>
          <p className='text-base mx-10'>Far far away, behind <br />
            the word mountains
          </p>
        </div>
        <div className='bg-white h-40 w-1/4 flex flex-col gap-5 items-start'>
          <p className='text-3xl font-semibold mx-5 mt-5'>Veterinary Services</p>
          <p className='text-base mx-10'>Far far away, behind <br />
            the word mountains
          </p>
        </div>  <div className='bg-white h-40 w-1/4 flex flex-col gap-5 items-start'>
          <p className='text-3xl font-semibold mx-5 mt-5'>Veterinary Services</p>
          <p className='text-base mx-10'>Far far away, behind <br />
            the word mountains
          </p>
        </div>
      </div>
      <div className='bg-black h-28 mt-20 flex justify-center items-center'>
        <div className='text-white text-balance'>Copyright ©2024 All rights reserved | This template is made with  by Afnan Abbasi</div>
      </div>
    </>
  )
}

export default App
