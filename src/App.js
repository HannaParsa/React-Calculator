import './App.css';
import { useEffect, useState } from 'react';

function App() {
   let[number,setNumber] = useState('0');

   const handleDigit =(d) =>{
       if(number == '0')
          setNumber(d)
       else
       setNumber(`${number}${d}`)
   }
   
   useEffect(() =>{
      const input = document.querySelector(".calculator__input")
      input.textContent = number;
   }, [number])

   const remove = () =>{
      if(number == '0') return;
   }
 return(

 );
}

export default App;
