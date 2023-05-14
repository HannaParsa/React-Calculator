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
      const len = number.length;
      if(len <= 1 ){
         setNumber('0');
      }
      else{
         setNumber(number.slice(0, len-1))
      }
   }
 return(

 );
}

export default App;
