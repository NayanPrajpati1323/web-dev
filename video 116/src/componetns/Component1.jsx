import React from 'react'
import { useContext } from 'react'
import { counterContex } from '../Context/Context'


const Component1 = () => {
    const value = useContext(counterContex)
  return (
    <div>{value.count}</div>
  )
}

export default Component1