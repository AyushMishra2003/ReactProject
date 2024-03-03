import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
// import {img} from'../image/user2-image.jpg'
import { CiFacebook,CiInstagram,CiTwitter} from "react-icons/ci";
import img1 from '../image/user2-image.jpg'
const Card = ({name,name_para,image}) => {
  return (
    <div className='flex flex-col items-center w-[20rem] h-[18 rem] border border-black rounded-md overflow-hidden relative gap-[0.5rem] '> 
         <div className='w-[19.9rem] h-[6rem] bg-[#449980] overflow-hidden'></div>
         <div className='absolute top-[1rem] left-[7rem] rounded-full md:left-[4rem] md:border border-black'>
            <img  className='w-[5.5rem] rounded-full' src={image} alt="" />
         </div>
          <p className='text-center font-[1.4rem] text-red-500'>{name}</p>
         <div className='border w-[20rem] '>
         <p className='text-center'>{name_para}</p>
         </div>
         <div className='flex gap-[1rem] text-[1rem] rounded-full'>
          <Link to={''}><CiFacebook className='text-[2rem] rounded-full hover:bg-red-400'/></Link>
          <Link to={'https://www.instagram.com/ayushm185/'}><CiInstagram className='text-[2rem] rounded-full hover:bg-red-400' /></Link>
          <Link><CiTwitter className='text-[2rem] rounded-full hover:bg-red-400' /></Link>
         </div>
    </div>
  )
}

export default Card
