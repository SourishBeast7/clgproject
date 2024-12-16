"use client"
import Form from 'next/form'
import { useRef, useState } from 'react'


export default function Search(data) {

  const stateRef = useRef("")
  const [State, setState] = useState("")
  let states = []
  for (let i in data.data) {
    states.push(i)
  }
  console.log(states)
  const searchBloodBank = () => {
    if (stateRef.current.value === "--Select State or Union Territory--") {
      alert("Enter details correctly")
      return;
    }
    console.log(stateRef.current.value)
  }
  return (
    <Form action={searchBloodBank} formMethod='POST' >

      <div className='flex flex-col items-center'>
        {/* <input className='text-black rounded-xl placeholder:text-center placeholder:font-semibold' placeholder='' type='text'/> */}
        <select ref={stateRef} className='text-black'>
          <option>--Select State or Union Territory--</option>
          {states.map((item) => { return <option value={item}>{item}</option> })}
        </select>
        <select className='text-black'>
          <option>Select District</option>
          { }
        </select>
        {/* <input className='text-black rounded-xl placeholder:text-center placeholder:font-semibold' ref={search_query} placeholder='Blood Type' onChange={()=>{setval(search_query.current.value)}} value={val} name="query" /> */}
        <button className='bg-lime-600 font-bold w-16 rounded-xl mx-auto' type="submit">Submit</button>
      </div>
    </Form>
  )
}