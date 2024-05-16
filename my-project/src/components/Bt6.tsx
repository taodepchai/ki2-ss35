import React from 'react'

export default function Bt6() {
    const [count, setcount] = React.useState<number>(0)
    const handclick = () => {
        setcount(count + 1)
    }
  return (
    <div>
        <h1>bt6</h1>
      <p>số lần click : {count}</p><br />
      <button onClick={handclick}>click</button>
    </div>
  )
}
