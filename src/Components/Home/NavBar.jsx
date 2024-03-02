import React from 'react'
import logo from '../Images/logo.svg'
import { Link } from 'react-router-dom'
import { HiViewGrid } from 'react-icons/hi'
import { SiGooglemessages } from "react-icons/si";
import { } from 'react-icons/hi'

function TextImage(props){
  return(
    <div className='flex items-center'>
      <img src={props.src} alt={props.alt} className='h-5 mr-2' />
      <div className="text">{props.text} </div>
    </div>
  )
}

function NavBar() {
  const Menu = [
    {
    id:1,
    name:'Accueil',
    path:'/'
    },
    {
    id:2,
    name:'Annonces', 
    path:'/'
    },
    // {
    // id:3,
    // name:'Se connecter',
    // path:'/'
    // },
]
  return (
    <>
      <header className='bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full'>
        <div className='container flex justify-between items-center'>
          <div className='logo flex items-center gap-10 '>
            <TextImage src={logo} alt='logo' text='REPAIR-IT' />

            <ul className='md:flex gap-8 '>
              {Menu.map((item, index)=>(
                <Link to={item.path} key={item.id}>
                  <li className='hover:text-purple-800 cursor-pointer hover:scale-105 transition-all ease-in-out'>{item.name}</li>
                </Link>
                
              ))}
            </ul>
          </div> 
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md mr-2' >Se connecter</button>
        </div>
      </header>
      
     
      
    </>
  )
}

export default NavBar
