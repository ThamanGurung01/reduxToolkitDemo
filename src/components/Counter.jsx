import React from 'react'
import { useSelector } from 'react-redux'
const Counter = () => {
  const count=useSelector((state)=>state.counter.value);
  const odd=useSelector((state)=>state.odd.value);
  const even=useSelector((state)=>state.even.value);
  return (
    <div>
      <span>count: {count}</span><br />
      <span>odd: {odd}</span><br />
      <span>even: {even}</span>
      </div>
  )
}

export default Counter