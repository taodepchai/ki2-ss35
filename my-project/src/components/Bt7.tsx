import React, {useState} from 'react'

export default function Bt7() {
    const [value, setvalue] = useState<string>('')
    const handchange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setvalue(e.target.value)
    }
  return (
    <div>
        <h1>bt7</h1>
      <textarea name="" id="" onChange={handchange}></textarea>
      <p>số kí tự: {value.length}</p>
    </div>
  )
}
