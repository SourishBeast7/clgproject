"use client"
import Form from 'next/form'
import { useRef, useState } from 'react'

export default function Search(data) {

  const stateRef = useRef("")
  const districtRef = useRef("")
  const bloodRef = useRef("")
  const [District, setDistrict] = useState([])
  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
  let states = []
  const handleChange = () => {
    try {
      let s = stateRef.current.value
      setDistrict(data.data[s].sort())
    }
    catch (err) {
      //
    }
  }
  for (let i in data.data) {
    states.push(i)
  }
  states.sort()

  const searchBloodBank = async () => {
    if (stateRef.current.value === "--Select State or Union Territory--" || districtRef.current.value === "--Select District--" || bloodRef.current.value === "--Select Blood Type--") {
      alert("Enter details correctly")
      return;
    }
    else {
      let newBlType
      if ((bloodRef.current.value.includes('+'))) {
        newBlType = (bloodRef.current.value).replace('+', '%2B')
      }
      else{
        newBlType = (bloodRef.current.value)
      }
      const SearchData = await fetch("api/Search?state=" + stateRef.current.value + "&dis=" + districtRef.current.value + "&bltype=" + newBlType)
      console.log(await SearchData.json())
    }
  }
  return (
    <Form action={searchBloodBank}>
      <h2 className='pt-[6vh] text-[50px] text-black font-extrabold text-center'>Blood Availability Search</h2>
      <div className='flex mx-[12vw] mt-[10vh] items-center'>
        <select ref={stateRef} onClick={handleChange} className='text-black font-semibold p-2 rounded-sm'>
          <option key="Null" value={null}>--Select State or Union Territory--</option>
          {states.map((item) => { return <option key={item} value={item} >{item}</option> })}
        </select>
        <select ref={districtRef} className='p-2 w-[10vw] font-semibold text-black rounded-sm mx-2'>
          <option key="Null" value={null}>--Select District--</option>
          {District?.map((item) => { return <option key={item} value={item} >{item}</option> })}
        </select>
      </div>
      <div className='flex flex-col'>
        <select ref={bloodRef} className='text-black mx-auto mt-5 font-semibold p-2 rounded-sm'>
          <option className='text-center' key={"Null"} value={null}>--Select Blood Type--</option>
          {bloodTypes.map((e) => { return <option key={e} value={e}>{e}</option> })}
        </select>
        <button className='bg-lime-600 font-bold rounded-md mt-3 p-2 mx-auto' type="submit">Submit</button>
      </div>
    </Form>
  )
}