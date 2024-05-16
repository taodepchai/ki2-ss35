import React, { useState } from 'react'

export default function Bt5() {
    const [value,setvalue]=useState<string>("")
    const handchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setvalue(e.target.value)
    }
  return (
    <div>
        <h1>bt5</h1>
      <input type="text" onChange={handchange}/><br />
      {value}
    </div>
  )
}
