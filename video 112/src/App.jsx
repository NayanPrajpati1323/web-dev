import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("Nayan")
  const [form, setForm] = useState({email:"" ,phone:" "})

 const handleClick = ()=>{
    alert("hey i'm clicked")
  }

  const handleMouseOver = ()=>{
    alert("oyyyy mouse hata....")
  }

  const handleOnChange = (e)=>{
    // setname(e.target.value)
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)

  }

  return (
    <>


     <div className="container" >
      <button onClick={handleClick} >click me</button>   
     </div>
     <div className="red">
      <button onMouseOver={handleMouseOver}>i am btn </button>
     </div>
      <input type="text" name='email' value={form.email} onChange={handleOnChange}/>
      <input type="num" name='phone' value={form.phone} onChange={handleOnChange}/>

    </>
  )
}

export default App
