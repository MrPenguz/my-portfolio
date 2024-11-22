import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-700 selection:text-white'>
      {/* <div className="flixed top-0 -z-10 h-full w-full"></div> */}
      <div className=" container mx-auto px-8">
        <Navbar />
      </div>

    </div>
  )
}

export default App
