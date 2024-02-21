import { comments } from "../data";
export async function GET(
  _reqest: Request,
  { params }: { params: { id: string } }
) {
  const comment = comments.find((com) => com.id === parseInt(params.id));
  return Response.json(comment);
}
