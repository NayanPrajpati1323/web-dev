import React from 'react'
import Component1 from './Component1'
import { useContext } from 'react'
import { counterContex } from '../Context/Context'

const Button = () => {
    const value = useContext(counterContex)

  return (
    <div><button onClick={() => value.setCount((count) => count + 1)}> <span><Component1 /></span> btn1</button></div>
  )
}

export default Button