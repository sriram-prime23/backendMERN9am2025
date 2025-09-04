import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Alert } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-purple-600 text-red-600 p-8 m'>mern developer</h1>
        <div className="App">
          <Alert variant="danger " className='text-primary'>This is a success alert!</Alert>
          <Button className="hover:file:bg-violet-600">Click Me</Button>
        </div>
        <input
  type="file"
  className="file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500 ..."
/>
<Button className='btn btn-primary hover:bg-green-500 hover:scale-105 transition'> Lorem, ipsum.</Button>
<Button className=" hover:bg-green-500 hover:scale-105 transition"> Lorem, ipsum.</Button>
    </>
    
  )
}

export default App
