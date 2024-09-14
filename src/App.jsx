import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Page2 from './component/Page2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
      <Navbar/>
     <Home/>
     <Page2/>
    </div>
  )
}

export default App
