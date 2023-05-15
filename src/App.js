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

   const calc = () =>{
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
         <main className='calculator__container'>
           <section className='calculator'>
              <div className="calculator__input"></div>
              <div className="calculator__output"></div>
               <div className='calculator__digits'>
                 <div className="grid-container">
                   <div className='grid-item' onClick={() => handleDigit('1')}>1</div>
                   <div className='grid-item' onClick={() => handleDigit('2')}>2</div>
                   <div className='grid-item' onClick={() => handleDigit('3')}>3</div>
                   <div className='grid-item' onClick={() => handleDigit('4')}>4</div>
                   <div className='grid-item' onClick={() => handleDigit('5')}>5</div>
                   <div className='grid-item' onClick={() => handleDigit('6')}>6</div>
                   <div className='grid-item' onClick={() => handleDigit('7')}>7</div>
                   <div className='grid-item' onClick={() => handleDigit('8')}>8</div>
                   <div className='grid-item' onClick={() => handleDigit('9')}>9</div>
                   <div className='grid-item' onClick={remove}>CE</div>
                   <div className='grid-item' onClick={() => handleDigit(0)}>0</div>
                   <div className='grid-item' onClick={() => {setNumber('0')}}>C</div>
                 </div>
               </div>
               <div className="calculator__operators">
               <div className="op__plus" onClick={() => handleDigit('+')}>+</div>
                  <div className="op__minus" onClick={() => handleDigit('-')}>-</div>
                  <div className="op__multiply" onClick={() => handleDigit('*')}>*</div>
                  <div className="op__divide" onClick={() => handleDigit('/')}>/</div>
                  <div className="op__square" onClick={() => handleDigit('**')}>^2</div>
                  <div className="op__power" onClick={() => handleDigit('.')}>.</div>
                  <div className="op__modulus" onClick={() => handleDigit('%')}>%</div>
                  <div className="op__calc" onClick={calc}>=</div>
               </div>
           </section> 
         </main>
      </div>
 );
}

export default App;
