import React from 'react'
import { Image } from 'lucide-react'
import { Link } from 'react-router-dom'

function ListReparateur({listReparateur}) {
  return (
    <div className='mb-10 px-8'>
      <h2 className='font-bold text-xl'>Les Reparateurs</h2>

      <div className='grid grid-cols-2 
        sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4 gap-7 mt-4'>

        {listReparateur.length > 0 ? listReparateur.map((reparateur, index)=>(

          <div className='border-[1px] rounder-lg p-3' key={index}>
          <Image src={reparateur.attributes?.image?.data?.attributes?.url} 
          alt='reparateur' width={500} height={200} 
          className='h-[200px] w-full object-cover rounded-lg'
          />
          <div className='mt-3 items-baseline flex flex-col gap-1'>
            <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-purple-800'>
              {reparateur.attributes?.categories?.data[0].attributes?.Name}
            </h2>
            <h2 className='font-bold'>{reparateur.attributes.Name}</h2>
            <h2 className='text-purple-800 text-sm'>{reparateur.attributes?.Annee_Experience}</h2>
            <h2 className='text-gray-500 text-sm'>{reparateur.attributes?.Adresse}</h2>

            <Link to={'/details/'+reparateur?.id} className='w-full'>
              <h2 className='p-2 px-3 border-[1px] border-primary
                text-primary rounded-full w-full text-center
                text-[11px] mt-2 cursor-pointer 
                hover:bg-purple-950 hover:text-white'>Je prends un rendez-vous</h2>
            </Link>
          </div>
        </div>
        ))

        :
        // Skelton Effect
        [1,2,3,4,5,6].map((item, index) => (
          <div className='h-[220px] bg-slate-200 
          w-full rounded-lg animate-pulse'></div>
        ))
        }
        
      </div>
    </div>
  )
}

export default ListReparateur
