import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='bg'>
    <div className='divone'>
<div className='flexpart'>
<div className="text">
  <p>Company</p>
</div>
<div className="">
  <ul className='ul'>
    <li><a href="">Home</a></li>
    <li><a href="">Contact</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">Store</a></li>
  </ul>
</div>


<div className="">
  <button className='button'>Singup</button>
</div>

</div>

    
    </div>
    </div>
  )
}

export default App
