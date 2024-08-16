import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {

  const [color,setColor] = useState("white");

  // const [value,setValue] = useState("");
  // const [dummy,setDummy]= useState("");

  // const handleChange = (e)=>{
  //   setDummy(e.target.value);
  // }

  // const handleSearch = ()=>{
  //   setValue(dummy);
  // }

  // const data = [
  //   {
  //     value:"",
  //     color:"red",
  //     bgColor:"Orange"
  //   },
  //   {
  //     value:"",
  //     color:"green",
  //     bgColor:"White",
  //     src:"ashok_chakra.png"
  //   },
  //   {
  //     value:"",
  //     color:"pink",
  //     bgColor:"green"
  //   },
    
  // ]

  const randomColor = ()=>{
    // const red=Math.floor(Math.random() * 255) ;
    // const green=Math.floor(Math.random() * 255) ;
    // const blue=Math.floor(Math.random() * 255) ;
    // return `rgba(${red},${green},${blue})`;
    const str= "0123456789ABCDEF";
    let color = "#";
    for(let i=1;i<=6;i++){
      let digit = str[Math.floor(Math.random() * (str.length-1))]
      color += digit;
    }
    return color;
  }

  const handleChange = ()=>{
    const color=randomColor()
    setColor(color);
  }

  return (
    <>    
     {/* <input onChange={handleChange} type="text" className='border-2 border-red-500' />
     <button onClick={handleSearch} type="submit">Search</button>
     <p>Searching...:{value}</p> */}

     {/* {data.map((item)=>{
      return <Button value={item.value} src={item.src} color={item.color} bgColor={item.bgColor}/>
     })}
      <marquee className='text-5xl text-center bg-gray-200 font-medium mt-5 p-4'>
        <span className='text-[orange]'>Happy </span>
         <span className='text-[#fff]'> Independence </span>
          <span className='text-[green]'> Day</span> 
          
          </marquee> */}

         <div
         style={
          {
            backgroundColor:color
          }
         } 
         className='w-full h-screen flex justify-center items-center'>
         <button onClick={handleChange} className='border border-gray-500 px-4 py-2 rounded-lg'>Change Color</button>
         </div>
    </>
  )
}

export default App
