import { Button } from '@mui/material'
import { Image, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import * as MonApi from '../../Api/MonApi.jsx'
import { Link } from 'react-router-dom';

function ChercheCategorie() {

  const [listCategorie, setListCategorie] = useState([]);
  useEffect(()=>{
    getListCategorie()
  }, []);

  const getListCategorie = ()=>{
    MonApi.getCategorie().then(resp=>{
    console.log(resp.data.data);
    setListCategorie(resp.data.data);
    }) 
  }

  return (
    <div className='mb-10 items-center px-5 flex flex-col gap-2'>
      <h2 className='font-boldtext-4xl tracking-wide'>Recherche de <span className='text-purple-700'>Réparateurs</span></h2>
      <h2 className='text-gray-500 text-xl'>Trouver un réparateur et prendre un rendez-vous très rapidement</h2>

      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <input type="text" className='h-11 px-4 py-2 border rounded-md flex-grow ' placeholder="Tapez le nom du réparateur..." />
        <Button type='submit' variant="contained">
          <Search className='h-4 w-4 mr-2 text-center'/>
          Recherche
        </Button>
      </div>
    

      {/* Display List of Category  */}
      <div className='grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6 '>
        {listCategorie.length > 0 ? listCategorie.map((item,index)=>index < 10 &&(
          <Link to={'/search/'+item.attributes.Name} key={index} className='flex 
            flex-col text-center items-center
            p-5 bg-blue-50 m-2 rounded-lg cursor-pointer
            gap-2 hover:scale-110 transition-all ease-in-out'>
            <Image src={item.attributes?.Icon?.data.attributes?.url}
              alt='icon'
              width={40}
              height={40}/>
              <label className='text-blue-600 text-sm'>{item?.attributes?.Name}</label>
          </Link>
        ))
      :
      [1,2,3,4,5,6].map((item,index)=>(
        <div className=' bg-slate-200 m-2
          w-[130px] h-[120px] rounded-lg animate-pulse'>  
        </div>
      ))
     
      }
      </div>
    </div>
  )
}

export default ChercheCategorie
