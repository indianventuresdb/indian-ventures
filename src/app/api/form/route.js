import { NextResponse } from "next/server";

export async function GET(req) {
  console.log("Hello");
  return NextResponse.json({});
}
