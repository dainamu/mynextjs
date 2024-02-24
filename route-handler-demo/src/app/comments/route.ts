import { NextRequest } from "next/server";
import { comments } from "./data";
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("q");
  const filterComments = query
    ? comments.filter((c) => c.text.includes(query))
    : comments;
  return Response.json(filterComments);
}

export async function POST(req: Request) {
  const comment = await req.json();
  const newcomment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newcomment);
  return new Response(JSON.stringify(newcomment), {
    headers: {
      "Content-type": "application/json",
    },
    status: 201,
  });
}
