
import './App.css';

import {Routes, Router, BrowserRouter, Route  } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import ChercheCategorie from './Components/Home/ChercheCategorie';
import ListReparateur from './Components/Home/ListReparateur';
import { useEffect, useState } from 'react';
import * as MonApi from '../src/Api/MonApi.jsx'
import Footer from './Components/Home/Footer.jsx';
import NavBar from './Components/Home/NavBar.jsx';
import { Container } from '@mui/material';


function App() {

  const [listReparateur, setListReparateur] = useState([]);
  useEffect(()=>{
    getListReparateur();
  }, []);

  const getListReparateur = ()=>{
    MonApi.getListReparateur().then(resp=>{
      console.log(resp.data.data)
      setListReparateur(resp.data.data)
    })
  }

  return (
    <>
    <BrowserRouter>
      <Container maxWidth='xl'>
        <NavBar/>
         <Routes>
          {/* <div className='md:px-20'> */}
            {/* <Route path='/' element ={<NavBar/>} /> */}
          {/* </div> */}
          
          {/* <Route path="/" element={ <Navigate to="/posts" replace />}/>
          <Route path="/posts"  element={<Home/>} />
          <Route path="/posts/search" element={<Home/>} />
          <Route path="/posts/:id" element ={<PostDetails/>} />
          <Route path="/auth" element={(!user ? <Auth/> : <Navigate to="/posts" /> )}/> */}
   
        </Routes>
        <HomePage/>
        <ChercheCategorie/>
        <ListReparateur listReparateur={listReparateur}/>
        <div>
          <Footer/>
        </div>
        
      </Container>
       
    </BrowserRouter>
    
    {/* <div className="App">
      <header className="App-header">
        <Header/>
      </header>
    </div> */}
   
    
    
    </>
    
  );
}

export default App;
