import { useState } from 'react'
import './App.css'
import Posts from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h3>react core concepts recap</h3>
      <ol>
        <li>components</li>
        <li>JSX</li>
        <li>props</li>
        <li>event handler</li>
        <li>state</li>
        <li>load data</li>
      </ol>
      <hr />

      <Posts></Posts>
      
      
    </>
  )
}

export default App
