import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Meet react et nestjs</h1>
      <Outlet />
    </>
  )
}

export default App
