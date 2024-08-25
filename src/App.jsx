import React, { useState } from "react"
export default  function App(){
  const [counter, setCounter] = useState(0)
  if(counter < 0){
    alert("Value can't be negative")
    setCounter(0)
  }
  return (
    <>
      <div 
        className="w-screen h-screen bg-black  text-white flex flex-col items-center justify-center"
      >
        <div className="m-6">
          <p className="m-4">Value in counter : {counter}</p>

          <button   
            className="bg-blue-600 text-white px-6 py-1 rounded-lg"
            onClick={() => setCounter(counter + 1)}
          >Add</button>

          <button
            className="bg-red-600 text-white m-1 px-6 py-1 rounded-lg"
            onClick={() => setCounter(counter - 1)}
          >Remove</button>
          
          <div className="text-center"><button
            onClick={() => setCounter(0)}
            className="bg-orange-600  text-white m-1 px-6 py-1 rounded-lg"
          >Reset</button></div>

        </div>
        <p className="">Developed by <a href="">Mubashaar Siddique</a></p>
        
        
      </div>
    </>
  )
}