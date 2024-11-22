import {usesate} from 'react'
export default function Home() {
    const [counter, setCounter]  = usesate<number>(0)
    const [addNum,setAddNum] = usesate(0)
    const add = () => {
      setCounter((n:number)=>{addNum + n})
    }
  return (
    <div>
      <h1>Hello World</h1>
      result: {counter}
      <input type="number" value={addNum} onChange={(e)=>{setAddNum(Number(e.target.value))} }/>
      <input type="button" onClick={add} />
    </div>
  )
}