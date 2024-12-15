import React from 'react'
import Navbar from '../Navbar/page'
import Footer from '../Footer/page'
import SearchBox from '../SearchBox/page'
import {promises as fs} from 'fs'


const MainPage = async () => {
  const data = await fs.readFile(process.cwd() + '/app/components/MainPage/state&city.json', 'utf8')
  console.log(data)
  return (
    <div className='bg-slate-400 min-h-screen'>
      <div className='flex py-3 px-4 bg-rose-800'>
        <Navbar />
      </div>
      <main className='bg-whi-800 min-h-screen min-w-full'>
        <div className='input-box border-4 rounded-lg overflow-hidden border-blue-600 m-auto mt-16 w-[50vw] h-[59vh] bg-red-900'>
          <SearchBox data={data}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MainPage