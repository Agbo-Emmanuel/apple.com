import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import "./components/style.css";



const App = ()=>{
  return(
    <>
      <div className='App'>
        <Header/>
        <Body/>
      </div>
    </>
  )
}



export default App