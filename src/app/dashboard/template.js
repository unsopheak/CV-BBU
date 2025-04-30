'use client'
import React, { useState } from 'react'

const template = ({children}) => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Count Value in template : {count}</h1>
      <button className="border mb-6" onClick={()=>setCount(count+1)}>
        Count in template bbu
      </button>
 
      {children}
    </div>
  )
}

export default template