import { comments } from "../data";
export async function GET(
  _reqest: Request,
  { params }: { params: { id: string } }
) {
  const comment = comments.find((com) => com.id === parseInt(params.id));
  return Response.json(comment);
}

export async function PATCH(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  // { params: { id } }オブジェクト分割代入部分　受け取ったオブジェクトから`params`オブジェクトを取り出して、その中のidプロパティを取り出す。
  // { params: { id: string }　型アノテーション部分 引数として受け取るオブジェクトの型を指定。paramsオブジェクトにidプロパティがあり、その方はstring型である。
  const body = await req.json(); // リクエストを受け取り、本文をjavascriptオブジェクトにして返す　jsonメソッドはpromiseを返すがawaitがついてるので、プロミスが約束した値を返す。
  const { text } = body; // オブジェクト分割でbody.textをtextに代入
  const index = comments.findIndex((c) => c.id === parseInt(id));
  comments[index].text = text;
  return Response.json(comments[index]);
}
export async function DELETE(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const index = comments.findIndex((c) => c.id === parseInt(id));
  const deleteComment = comments[index].text;
  comments.splice(index, 1);
  return Response.json(deleteComment);
}
