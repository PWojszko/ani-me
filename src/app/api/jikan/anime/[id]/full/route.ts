import { Anime } from "@/vendor/jikan/jikanTypes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const body = await fetch(
      `https://api.jikan.moe/v4/anime/${context.params.id}/full`
    );
    const response: { data: Anime } = await body.json();

    return NextResponse.json(response);
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
