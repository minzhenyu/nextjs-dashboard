import {usesate} from 'react'
export default function Home() {
    const [counter, setCounter]  = usesate(0)
    const [addNum,setAdddNum] = usesate(0)
    const add = () => {
      setCounter(n=>addNum + n)
    }
  return (
    <div>
      <h1>Hello World</h1>
      result: {counter}
      <input type="number" value={addNum} onChange={(e)=>{setAdddNum(Number(e.target.value))} }/>
      <input type="button" onClick={add} />
    </div>
  )
}