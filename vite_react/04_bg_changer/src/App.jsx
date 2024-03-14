import { useState } from "react"

function App() {
  const [colour, setColour] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: colour}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button
            onClick={() => setColour("red")} className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}>Red</button>
             <button
             onClick={() => setColour("green")} className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}>green</button>
             <button
             onClick={() => setColour("blue")} className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}>blue</button>
             <button
             onClick={() => setColour("yellow")} className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor: "yellow"}}>yellow</button>
             <button
             onClick={() => setColour("purple")} className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor: "purple"}}>purple</button>
             <button
             onClick={() => setColour("brown")} className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor: "brown"}}>brown</button>
          </div>
        </div>
    </div>
  )
}

export default App
