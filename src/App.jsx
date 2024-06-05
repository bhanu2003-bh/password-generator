import { useCallback, useEffect, useState } from 'react'
import './App.css'
import RangeSlider from './Component/RangeSlider';
import CopyClipboard from './Component/CopyClipboard';




function App() {
  const [password, setpassword] = useState('abcdefgh');
  let [length,setlength] = useState(8);

let [numeric,setnumeric] = useState(false);

let [alpha,setaplpha] = useState(false);



let passwordgenerator = useCallback(() =>{
  let arr = "abcdefghijklmnopqrstuvwxyz";
  let brr = "1234567890";
  let crr = "!@#$%&*?";
  
  let ans = "";
   if(numeric){
    ans = ans + String(brr[Math.floor(Math.random()*brr.length)]);
   }
   if(alpha){
    ans = ans+ String(crr[Math.floor(Math.random()*crr.length)]);
   }

   for (let index = 0; index < length-Number(numeric+alpha); index++) {
    const element = Math.floor(Math.random()*arr.length);
    ans = ans + String(arr[element]);
   }
   setpassword(ans);
},[length,numeric,alpha]);



const xyz = useEffect(() =>{
  passwordgenerator();
},[numeric,alpha,length]);


function set_length (a){
  setlength(a);
}


const set_numeric = () => {
  console.log('called numeric');
  setnumeric(!numeric);
}

const set_alpha = () => {
  console.log('called alpha');
  setaplpha(!alpha);
}

  return (
    <div>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <RangeSlider onchange={set_length}  inital_length={length}></RangeSlider>
      <CopyClipboard password={password}></CopyClipboard>
      <input type='checkbox' name='isnumeric' onChange={set_numeric}></input> 
<span style={{color:'white'}}>Numeric</span>
<br></br>
<input type='checkbox' name='isaplha' onChange={set_alpha}></input> 
<span style={{color:'white'}}>Special Characters</span>

    </div>
  )
}

export default App
