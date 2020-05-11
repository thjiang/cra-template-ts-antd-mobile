import { useState } from 'react'
import { createModel } from 'hox'

function useCounter() {
  const [count, setCount] = useState(0)
  const decrement = () => setCount(count - 1)
  const increment = () => setCount(count + 1)
  const updateCounter = (val: number) => setCount(val)
  return {
    count,
    decrement,
    increment,
    updateCounter
  }
}

export default createModel(useCounter)
