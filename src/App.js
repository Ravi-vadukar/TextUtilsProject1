
// import { useState } from 'react';
import './App.css';
// import About1 from './componets/About1';
import Nevbar from './componets/Nevbar';
import TextForm  from './componets/TextForm';
// import React, { useState } from 'react';


function app() {
  //  const[mode,setDarkMode] = useState('light'); // wether dark mode is enble or not 
  return(

    <>  
    
<Nevbar title = "Textutils1"  About = "AboutTexttools"/> 
{/*  
 <Nevbar title = "TextUtils" mode ={mode}/> */}

<div className="container my-3">
  <TextForm heading = "Enter the text to analysis"/>
    
  {/* <About1/> */}
</div>
    </>
  );
}
 

export default app;
