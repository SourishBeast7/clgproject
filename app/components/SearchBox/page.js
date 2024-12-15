"use client"
import Form from 'next/form'
// import { useRef,useState } from 'react'

 
export default function Search(data) {
  // const search_query = useRef("")
  // const [val, setval] = useState("")
  let option = []
  for(let i=0;i<Object.keys(data);i++){
    option.push(data[i])
    console.log(data[i])
  }
  const searchBloodBank = ()=>{
    return 0;
  }
  
  return (
    <Form action={searchBloodBank} formMethod='POST' >
    
      <div className='flex flex-col items-center'>
        {/* <input className='text-black rounded-xl placeholder:text-center placeholder:font-semibold' placeholder='' type='text'/> */}
        <select className='text-black'>
          <option>--Select State--</option>
          {option.map((item)=>{return item})}
        </select>
        {/* <input className='text-black rounded-xl placeholder:text-center placeholder:font-semibold' ref={search_query} placeholder='Blood Type' onChange={()=>{setval(search_query.current.value)}} value={val} name="query" /> */}
        <button className='bg-lime-600 font-bold w-16 rounded-xl mx-auto' type="submit">Submit</button>
      </div>
    </Form>
  )
}