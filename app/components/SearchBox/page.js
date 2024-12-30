"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
export default function Search() {
  const stateRef = useRef("");
  const districtRef = useRef("");
  const bloodRef = useRef("");
  const [districts, setDistricts] = useState([]);
  const [Data, setData] = useState({})
  useEffect(()=>{
    // FetchData()
    fetch("/api/data").then((res)=>{
      return res.json()
    }).then(async (data)=>{
      setData(await (data.DATA))
    }).catch((e)=>{
      console.log(e)
    })
  },[])
  const router = useRouter();
  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const states = Object.keys(Data).sort();

  const handleStateChange = () => {
    const selectedState = stateRef.current.value;
    if (selectedState in Data) {
      setDistricts(Data[selectedState].sort());
    }
  };

  const searchBloodBank = async (event) => {
    event.preventDefault(); 

    const state = stateRef.current.value;
    const district = districtRef.current.value;
    const bloodType = bloodRef.current.value;

    if (!state || !district || !bloodType) {
      alert("Please fill in all fields.");
      return;
    }
    
    const encodedState = encodeURIComponent(state);
    const query = `state=${encodedState}&dis=${district}&bltype=${bloodType}`;
    router.push(`/Results?${query}`);
  };
  return (
    <form onSubmit={searchBloodBank}>
      <h2 className="pt-[6vh] text-[50px] text-black font-extrabold text-center">
        Blood Availability Search
      </h2>
      <div className="flex mx-[12vw] mt-[10vh] items-center">
        <select
          ref={stateRef}
          onChange={handleStateChange}
          className="text-black font-semibold p-2 rounded-sm"
        >
          <option value="">--Select State or Union Territory--</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <select
          ref={districtRef}
          className="p-2 w-[10vw] font-semibold text-black rounded-sm mx-2"
        >
          <option value="">--Select District--</option>
          {districts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <select
          ref={bloodRef}
          className="text-black mx-auto mt-5 font-semibold p-2 rounded-sm"
        >
          <option value="">--Select Blood Type--</option>
          {bloodTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <button
          className="bg-lime-600 font-bold rounded-md mt-3 p-2 mx-auto"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
