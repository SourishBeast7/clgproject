import { NextResponse } from "next/server"

export async function POST(req,res) {
    const result = await req.json()
    console.log(result)
    res = NextResponse.json(req)
    return Response.json({ result , res })
  }