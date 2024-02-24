import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname === "/profile");
  const isprofile = request.nextUrl.pathname === "/profile";
  if (isprofile) {
    // もし/profileにアクセスしたら/helloにリダイレクト
    //return NextResponse.redirect(new URL("/hello", request.url));
    return NextResponse.rewrite(new URL("/hello", request.url)); // rewriteの場合URLはそのままで/helloの内容がレンダリングされる
  }
  //   return NextResponse.redirect(new URL("/hello", request.url));
}

// export const config = {
//   // /profileにアクセスると/helloにリダイレクトされる。
//   matcher: "/profile",
// };
