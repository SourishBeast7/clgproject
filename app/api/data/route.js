import { NextResponse } from "next/server"
// import { promises as fs } from 'fs'
import data from 'data.js'
export async function GET(request) {
    try {
        return NextResponse.json(data)
    }
    catch (err) {
        console.log(err)
        return NextResponse.json({ error: 'Something went Wrong...' }, { status: 500 })
    }
}



// `/search/s:${result.state}&d:${result.district}&bt:${result.bltype}` 
