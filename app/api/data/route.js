import { NextResponse } from "next/server"
// import { promises as fs } from 'fs'
import { MongoClient } from "mongodb"
export async function GET(request) {
    const client = new MongoClient(process.env.MONGO_URI)
    const database = client.db('BloodFinder');
    const banks = database.collection('states&districts');
    try {
        // const file = await fs.readFile(process.cwd() + '/app/api/data/data.json', 'utf-8')
        // const data = await JSON.parse(file)
        const DATA = await banks.findOne({})
        delete DATA["_id"]
        return NextResponse.json({DATA})
    }
    catch (err) {
        console.log(err)
        return NextResponse.json({ error: 'Something went Wrong...' }, { status: 500 })
    }
}



// `/search/s:${result.state}&d:${result.district}&bt:${result.bltype}` 
