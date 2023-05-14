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

   const clac = () =>{
      const res = eval(number)
      const output = document.querySelect(".calculator__output");
      
      output.textContent = res;

      setNumber(res)
   }
 return(
      <div className='App'>
         <div className='App-header'>
            <h2>calculator</h2>
         </div> 
      </div>
 );
}

export default App;
