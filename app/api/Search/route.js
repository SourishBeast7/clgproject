import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"
import { redirect } from "next/navigation";

export async function GET(request) {
  const client = new MongoClient(process.env.MONGO_URI)
  const database = client.db('BloodFinder');
  const banks = database.collection('bloodBanks');
  const query = {
    state: request.nextUrl.searchParams.get("state"),
    dis: request.nextUrl.searchParams.get("dis"),
    bltype: request.nextUrl.searchParams.get("bltype")
  }
  try {

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
          name: 1,
          state: 1,
          district: 1,
          bloodtype: 1 // Only include the fields you need
        }
      }
    ]).toArray()
    return NextResponse.json({ success: true, results })
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
