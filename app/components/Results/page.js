// components/Results.js
"use client"
import { useRef } from 'react';
import React from 'react';
import data from '@/app/api/data/result'
const Results = () => {
  const ref = useRef()
  if(data===null || data===undefined || data===""){
    console.log(ref.current.style.display)
    return (<div>Welcome</div>)
  }
  return (
    <div ref={ref} className="overflow-x-auto mx-4">
      <h1 className='text-black text-center text-[70px] bg-green-500 rounded-t-md'>BloodBanks</h1>
      <table className="min-w-full border border-gray-300 rounded-md shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700">Name</th>
            <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700">State</th>
            <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700">District</th>
            <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700">Blood Type</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((obj,index) => (
            <tr key={index} className="border-t border-gray-200 bg-gray-50">
              <td className="py-3 px-4 text-center text-sm text-gray-700">{obj.name}</td>
              <td className="py-3 px-4 text-center text-sm text-gray-700">{obj.state}</td>
              <td className="py-3 px-4 text-center text-sm text-gray-700">{obj.district}</td>
              <td className="py-3 px-4 text-center text-sm text-gray-700">{obj.bloodtype}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
