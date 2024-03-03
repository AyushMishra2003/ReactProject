import React from 'react'
import Card from './Component/Card'
import useTechData from './Hooks/CardHooke'
import Newsletter from './Newsletter'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Letter from './Letter';
const Home = () => {
  return (
    <div>
    <div className='flex flex-col items-center gap-2 mt-[5rem] sm:border border-black  md:flex-row'>
      {useTechData.map((val,ind)=><Card image={val.img} name_para={val.text} name={val.name} key={ind+1} />)}
    </div>
    <Letter/>
    <Newsletter/>
     </div>
    )
  }
export default Home
