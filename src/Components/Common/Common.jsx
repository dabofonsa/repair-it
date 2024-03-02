import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'


function Common({ children }) {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Common
