'use client'
import {useState} from 'react'
export default function Add() {
    const [counter, setCounter]  = useState<number>(0)
    const [addNum,setAddNum] = useState<number>(0)
    const add = () => {
      setCounter((n:number)=>addNum + n)
    }
  return (
    <div>
      <h1>add</h1>
      result: {counter}
      <input type="number" value={addNum} onChange={(e)=>{setAddNum(Number(e.target.value))} }/>
      <input type="button" onClick={add} />
    </div>
  )
}