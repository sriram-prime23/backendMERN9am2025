import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Home from './home'

function App() {
  const [count, setCount] = useState(0)
  return (

    <>


<Home />

<Home /><Home /><Home /><Home /><Home /><Home /><Home />

    <button onClick={() => setCount( count +1 )}> Increment {count} </button>
    <button onClick={() => setCount( count -1 )}> Decrement {count} </button>

    <button onClick={() => setCount(0)}> Reset Count </button>

    </>
  
  )
}




export default App
