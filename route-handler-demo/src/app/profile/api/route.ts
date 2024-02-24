import { type NextRequest } from "next/server";
import { headers } from "next/headers";
export async function GET(req: NextRequest) {
  // 受信リクエストよりヘッダーを読み取る方法
  const requestHeaders = new Headers(req.headers); // headerオブジェクトを作成するか
  const headerList = headers(); // headers関数を呼び出す 読み取りせんよう
  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));

  return new Response("<h1>Profile api date</h1>", {
    // レスポンスにヘッダーを設定
    headers: {
      "Content-Type": "text/html",
    },
  });
}
