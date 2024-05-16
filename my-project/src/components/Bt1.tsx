import React, { useState } from 'react'

export default function Bt1() {
    const [name,setName] = useState<String>("Nguyễn Văn A")
    
  return (
    <div>
        <h1>bt1</h1>
      <h1>họ và tên: {name}</h1>
    </div>
  )
}
