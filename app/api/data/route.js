import { NextResponse } from "next/server"
import { promises as fs } from 'fs'
export async function GET(request) {
    try {
        const file = await fs.readFile(process.cwd() + '/app/api/data/data.json', 'utf-8')
        const data = await JSON.parse(file)
        return NextResponse.json({data})
    }
    catch (err) {
        console.log(err)
        return NextResponse.json({ error: 'Something went Wrong...' }, { status: 500 })
    }
}



// `/search/s:${result.state}&d:${result.district}&bt:${result.bltype}` 
