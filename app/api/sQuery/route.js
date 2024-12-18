import { NextResponse } from "next/server"

export async function POST(request) {
    try {
        const result = await request.json()
        console.log(result)
        return NextResponse.json({ result })
    }
    catch (err) {
        res.status(500).send("Something went wrong...")
    }
}