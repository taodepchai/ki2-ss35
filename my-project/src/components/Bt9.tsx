import React, {useState} from 'react'

export default function Bt9() {
    const [value,setvalue] = useState<string>("")
const handchange = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setvalue(e.target.value)
}
  return (
    <div>
        <h1>bt9</h1>
      giới tính : {value} <br />
      <input type="radio" id="" value={'Nam'} onChange={handchange}/>Nam <br />
      <input type="radio" id="" value={'Nữ'} onChange={handchange}/>Nữ<br />
      <input type="radio" id="" value={'Khác'} onChange={handchange}/>Khác
    </div>
  )
}
