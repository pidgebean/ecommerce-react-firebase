import React from 'react'

export default function Product({title, src}) {
  return (
    <div>
      this is the product page
      <div>{title}</div>
      <img src={src} alt="" />
    </div>
  )
}
