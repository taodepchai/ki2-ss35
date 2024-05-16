import React, { useState } from 'react'

export default function Bt2() {
    type product ={
        id:number,
        name:string,
        price:number,
        quantity:number,
    }
    const [product,setproduct]= useState<product>({
        id:0,
        name:"âccascas",
        price:10,
        quantity:12310,
    })
  return (
    <div>
        <h1>bt2</h1>
      <h1>Thông tin sản phẩm</h1>
      <p>id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price:{product.price}</p>
      <p>quantity: {product.quantity}</p>
    </div>
  )
}
