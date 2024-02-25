import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
export async function GET(req: NextRequest) {
  // 受信リクエストよりヘッダーを読み取る方法
  const requestHeaders = new Headers(req.headers); // headerオブジェクトを作成するか
  const headerList = headers(); // headers関数を呼び出す 読み取りせんよう
  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));

  const cookieStore = cookies();
  cookies().set("resultperPage", "20"); // cookiesのsetメソッドでも設定できる
  cookies().set("thema", "dark");
  await cookieStore.delete("thema");
  const thema = req.cookies.get("thema");
  console.log(thema);

  return new Response("<h1>Profile api date</h1>", {
    // レスポンスにヘッダーを設定
    headers: {
      "Content-Type": "text/html",
      //"Set-Cookie": "thema=dark", // クッキーを設定
    },
  });
}
