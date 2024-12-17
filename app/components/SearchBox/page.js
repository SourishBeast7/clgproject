"use client"
import Form from 'next/form'
import { useRef, useState } from 'react'


export default function Search(data) {

  const stateRef = useRef("")
  const districtRef = useRef("")
  const [District, setDistrict] = useState([])
  let states = []
  const handleChange = () => {
    let s = stateRef.current.value
    setDistrict(data.data[s])
  }
  let bloodTypes = ["A+","A-","B+","B-","AB+","AB-","O+","O-"]
  
  for (let i in data.data) {
    states.push(i)
  }
  states.sort()
  District.sort()

  // for(let i of data.data){
  //   if(stateRef.current.value===i){
  //       districts = i;
  //   }
  // }
  const searchBloodBank = () => {
    if (stateRef.current.value === "--Select State or Union Territory--" || districtRef.current.value === "--Select District--") {
      alert("Enter details correctly")
      return;
    }
  }
  return (
    <Form action={searchBloodBank}>
      <h2 className='pt-[6vh] text-[50px] text-center'>Blood Availability Search</h2>
      <div className='flex mx-[12vw] mt-[10vh] items-center'>
        {/* <input className='text-black rounded-xl placeholder:text-center placeholder:font-semibold' placeholder='' type='text'/> */}
        <select ref={stateRef} className='text-black font-semibold p-2 rounded-sm'>
          <option>--Select State or Union Territory--</option>
          {states.map((item) => { return <option key={item} value={item} >{item}</option> })}
        </select>
        <select onClick={handleChange} ref={districtRef} className='p-2 w-[10vw] font-semibold text-black rounded-sm mx-2'>
          <option>--Select District--</option>
          {District.map((item) => { return <option key={item} value={item} >{item}</option> })}
        </select>
      </div>
      <div className='flex flex-col'>
        <select className='text-black mx-auto mt-5 font-semibold p-2 rounded-sm'>
          <option className='text-center' key={"Null"} value={null}>--Select Blood Type--</option>
          {bloodTypes.map((e)=>{return <option key={e} value={e}>{e}</option>})}
        </select>
        <button className='bg-lime-600 font-bold rounded-md mt-3 p-2 mx-auto' type="submit">Submit</button>
      </div>
    </Form>
  )
}