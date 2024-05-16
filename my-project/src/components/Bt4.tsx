
import React, { useState } from 'react'
export default function Bt4() {
    const [active,setAtive]= useState<boolean>(true)
 const handleChange = () =>{
    setAtive(!active)
 }
  return (
    <div>
      <h1>bt4</h1>
      {active?"tiêu đề" :""} <br />
      <button onClick={handleChange}> {active?"ẩn" :"hiện"}</button>
    </div>
  )
}
