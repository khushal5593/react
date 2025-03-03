import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Section from './components/Section';

// import Navbar from './components/Navbar';
function App(){
  return(
    <>
    <Navbar/>
    <Footer/>
    <Section/>
    </>
  )
}
export default App;