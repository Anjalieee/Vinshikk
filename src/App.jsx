import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav';
import Dashboard from './Dashboard';

function App (){
  return(
    <>
  <main className='relative'>
    <Nav />
    <Dashboard />
  </main>
</>
  );
}
export default App;