import React from 'react'

import logoHomePage from '../Images/logoHomePage.svg'

function HomePage() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
        <img
          alt=""
          src={logoHomePage}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">REPAIR-IT</h2>

        <p className="mt-4 text-gray-600">
          Bienvenue dans l'univers de Repair-It, la marketplace révolutionnaire qui met en relation des clients 
          et des réparateurs pour résoudre tous vos problèmes de réparation ! Que vous ayez besoin de réparer un appareil électronique, une voiture, 
          un meuble ou même une installation domestique, Repair-It est là pour vous simplifier la vie. 
        </p>
        
        <form className="mt-8 flex sm:flex-col gap-10">
          <label htmlFor="deviceType" className="block text-center font-medium text-gray-400">Quel appareil souhaitez-vous réparer ?</label>
          <select 
            id="deviceType" 
            className="px-4 py-2 border rounded-md
            border-gray-200 ">
            <option value="">Sélectionner le type d'appareil</option>
            <option value="">Iphone</option>
            <option value="">Google Pixel</option>
            <option value="">Tenor</option>
            <option value="">Samsung Galaxy</option>
            
          </select>

          <label htmlFor="location" classNa="block text-center font-medium text-gray-700">Lieu d'intervention</label>
          <input 
            id="location" 
            type="text" 
            placeholder="Ex: Ville ou Code Postal" 
            className="px-5 py-2 border rounded-md flex-grow border-gray-200" 
            
          />

          <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-md transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
            Rechercher
          </button>
          
        </form>

      </div>
    </div>
  </div>
</section>
  )
}

export default HomePage
