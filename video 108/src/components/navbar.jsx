import React, { useEffect } from 'react'


const Navbar = ({color}) => {

    useEffect(() => {
      alert("color was changed")
    }, [color])
    

  return (
    <div>hey this is {color} navbar</div>
  )
}

export default Navbar