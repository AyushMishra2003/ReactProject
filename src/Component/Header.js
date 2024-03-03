import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

 const Header = () => {

     const [barActive, setBarActive] = useState(true)

     const hamActive = () => {
         barActive ? setBarActive(false) : setBarActive(true)
     }
     const useHeaderList = [{ "url": "/", "list": "Home" },
     { url: "/", "list": "Contact" },
     { url: "/", "list": "About" }]

     return (
         <header className='flex w-full justify-between  md:pl-14 md:pr-6 lg:pl-16 lg:pr-8 lg:p-3 bg-darkBg text-white items-center  z-[100] py-[10px] px-6 shadow-[-1px_1px_7px_#000] fixed top-0 left-0 bg-black'>
             <div className=' w-[2rem] h-[2rem] flex items-center justify-center md:hidden cursor-pointer text-[#bd4aff]' onClick={hamActive}>
                 {barActive ? <FontAwesomeIcon icon={faBars} className='text-[1.3rem]' />
                     : <FontAwesomeIcon icon={faXmark} className='text-[1.6rem]' />}
             </div>
             <div className='md:mr-6 lg:mr-10'>LOGO</div>
             <nav className={`bg-black text-white md:border-0 shadow-[0px_160px_1000px_#12073ac5] md:shadow-none flex border-t-[#201154] border-t-2  p-4 pb-10 md:p-0 w-screen md:max-w-[80vw]  items-center justify-between gap-3 md:gap-0 flex-col absolute 
             ${barActive ? "top-[2.95rem] left-[-60rem] duration-[0.5s]" : "top-[2.85rem] left-0 duration-[0.5s]"}
              md:flex-row md:static `}>
                <div className="flex flex-col gap-3 md:flex-row md:gap-0 ">
                   {useHeaderList.map((val) => {                         return (
                             <NavLink key={val.list} style={({ isActive }) => ({                                 color: isActive ? '#c35dfe' : 'white'                             })} to={val.url} end>                                   <div className='text-[1.05rem] 
                             tracking-wide 
                             w-[90vw] md:w-fit text-center md:border-0
                             md:hover:border-b-2
                             pb-4 pt-1  md:flex md:items-center md:justify-center md:gap-2
                             lg:p-[3px_9px] lg:m-[0px_11px]
                              border-grey hover:border-[#bd4aff] hover:text-[#c35dfe]
                              duration-200 cursor-pointer 
                              border-b-[1px]'>
                                     {val.list}
                                 </div >
                             </NavLink>
                         )
                     })}
                 </div>
             </nav>
         </header>
     )
 }


// const Header = () => {
  
//   const [barActive,setBarActive]=useState(true)

//   const hamActive=()=>{
//     barActive?setBarActive(false):setBarActive(true)
//   }
//   const useHeaderList=[{"url":"/","list":"Home"},{"url":"/","list":"Contact"},{"url":"/","list":"About Us"},{"url":"/","list":"Appoitement"}]
//   return (
//     <header className='flex items-center justify-between w-full border border-black '>
//       <div   className='md:hidden'  onClick={hamActive}>
//         {barActive?<FontAwesomeIcon icon={faBars} className='text-[1.5rem]'/>:<FontAwesomeIcon icon={faXmark} className='text-[1.5rem]'/>}
//       </div>
//       <div className='md:mr-6'>Icon</div>
//       <nav className={`absolute flex items-center border border-red-500 md:static  ${barActive?"top-[2.95rem] left-[-60rem] duration-[0.5s]":"top-[2.85rem] left-0 duration-[0.5s]"}`}>
//         <div className='z-10 flex flex-col items-center md:flex-row '>
//           {useHeaderList.map((val)=>{
//             return(
//               <NavLink style={({ isActive }) => ({
//                        })} to={val.url} end>
//                 <div className='text-[1.05rem] w-[90vw] tracking-wide flex flex-col  hover:text-red-400 '>
//                   {val.list}
//                 </div>
//               </NavLink>
//             )
//           })}
//        </div>  
//       </nav>
//     </header>
//   )
// }



// const Header = () => {
//   return (
//     <div>
//       <div className="navbar bg-base-100">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//       </div>
//       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//         <li><a>Item 1</a></li>
//         <li>
//           <a>Parent</a>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </li>
//         <li><a>Item 3</a></li>
//       </ul>
//     </div>
//     <a className="text-xl btn btn-ghost">daisyUI</a>
//   </div>
//   <div className="hidden navbar-center lg:flex">
//     <ul className="px-1 menu menu-horizontal">
//       <li><a>Item 1</a></li>
//       <li>
//         <details>
//           <summary>Parent</summary>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </details>
//       </li>
//       <li><a>Item 3</a></li>
//     </ul>
//   </div>
//   <div className="navbar-end">
//     <a className="btn">Button</a>
//   </div>
// </div>
//     </div>
//   )
// }



export default Header