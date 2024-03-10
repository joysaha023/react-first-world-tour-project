import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './components/countries/Countries'

function App() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return (
    <>
      
      <h1>React First World Tour</h1>
      <Countries></Countries>
     
    </>
  )
}

export default App
