import React from 'react'
import Navbar from '../Navbar/page'
import Footer from '../Footer/page'
import SearchBox from '../SearchBox/page'
import { promises as fs } from 'fs'
import img from "/public/red_blood.jpg"

const MainPage = async () => {
  let file = await fs.readFile(process.cwd() + '/app/api/data/states/data.json', 'utf-8')
  let data = JSON.parse(file)
  const styling = {
    backgroundImage: `url(${img.src})`,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
  return (
    <div className='min-w-full min-h-screen'>
      <div style={styling}>
        <div className='flex py-3 px-4 bg-rose-800'>
          <Navbar />
        </div>
        <main className='min-h-screen min-w-full'>
          <div className='input-box  rounded-lg overflow-hidden m-auto mt-16 w-[50vw] h-[59vh]'>
            <SearchBox data={data} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default MainPage