import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"
import { promises as fs } from 'fs'
export async function GET(request) {
  const client = new MongoClient(process.env.MONGO_URI)
  try {
    const database = client.db('BloodFinder');
    const banks = database.collection('bloodBanks');
    const query =  {
      state:request.nextUrl.searchParams.get("state"),
      dis:request.nextUrl.searchParams.get("dis"),
      bltype:request.nextUrl.searchParams.get("bltype")
    }
    console.log(query,typeof query)
    const results = await banks.aggregate([
      {
        $match: {
          state: query.state, // Replace with the specific state value
          district: query.dis, // Replace with the specific district value
          bloodtype: {
            $in: [query.bltype] // Replace with the specific blood type or array of blood types
          }
        }
      },
      {
        $project: {
          _id: 1, // Optional: Exclude _id from the results
          name:1,
          state: 1,
          district: 1,
          bloodtype: 1 // Only include the fields you need
        }
      }
    ]).toArray()
    await fs.writeFile(process.cwd()+'/app/api/data/result.json',JSON.stringify(results))
    return NextResponse.json({success:true,results})
  }
  catch (err) {
    console.log(err)
    return NextResponse.json({ error: 'Something went Wrong...' }, { status: 500 })
  }
  finally {
    client.close()
  }
}



// `/search/s:${result.state}&d:${result.district}&bt:${result.bltype}` 
