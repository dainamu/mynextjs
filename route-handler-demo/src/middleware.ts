import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const themaPreference = request.cookies.get("thema");
  console.log(themaPreference);
  if (!themaPreference) {
    response.cookies.set("thema", "dark");
  }
  console.log(request.nextUrl.pathname === "/profile");
  const isprofile = request.nextUrl.pathname === "/profile";
  if (isprofile) {
    // もし/profileにアクセスしたら/helloにリダイレクト
    //return NextResponse.redirect(new URL("/hello", request.url));
    //return NextResponse.rewrite(new URL("/hello", request.url)); // rewriteの場合URLはそのままで/helloの内容がレンダリングされる
  }
  //   return NextResponse.redirect(new URL("/hello", request.url));

  // ヘッダーの設定
  response.headers.set("custom-header", "custum-value");
  return response;
}

// export const config = {
//   // /profileにアクセスると/helloにリダイレクトされる。
//   matcher: "/profile",
// };
