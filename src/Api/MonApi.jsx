// const { default: axios } = require("axios");


// const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY;

// const axiosClient=axios.create({
//     baseURL:'https://appointment-booking-admin.onrender.com/api',
//     headers:{
//         'Authorization':`Bearer ${API_KEY}`
//     }
// })

//  export const getCategorie=()=>axiosClient.get('/categories?populate=*');


import axios from 'axios';

const API = axios.create({ 
    baseURL: 'https://post-souvenir.onrender.com' });

// est appelé sur chaque requete
API.interceptors.request.use((req) => {
  if(localStorage.getItem('profile')){
    // req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
})

export const getCategorie = () => API.get('/categories?populate=*');

export const getListReparateur = () => API.get('/reparateurs?populate=*');
