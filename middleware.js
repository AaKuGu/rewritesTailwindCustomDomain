import { NextResponse, NextRequest } from "next/server";

export async function middleware(request) {
  const { hostname, pathname, searchParams } = new URL(request.url);
  console.log("🚀 ~ hostname:", hostname);
  console.log("🚀 ~ pathname dpkg:", pathname);
  console.log("🚀 ~ pathname dpkg:", pathname.startsWith("/go"));

  if (
    hostname !== "localhost" &&
    hostname !== "rewrites-tailwind-custom-domain.vercel.app"
  ) {
    if (pathname == "/") {
    return NextResponse.rewrite(new URL(`/user1`, request.url));
    }
  } else if (pathname.startsWith("/go")) {
    return NextResponse.rewrite(new URL(`/user2`, request.url));
  } else {
    return NextResponse.next();
  }

  // if (hostname === "localhost") {
  //   if (pathname === "/") {
  //     return NextResponse.rewrite(
  //       new URL(`/user1?pathname=${pathname}`, request.url)
  //     );
  //   }
  //   if (pathname.startsWith("/go")) {
  //     return NextResponse.rewrite(new URL(`/user2`, request.url));
  //   }
  // }
}

// if (
//   hostname !== "localhost" &&
//   hostname !== "rewrites-tailwind-custom-domain.vercel.app"
// ) {
//   if (pathname.startsWith("/go")) {
//     return NextResponse.rewrite(new URL(`/user1?go=true`, request.url));
//   } else if (pathname.startsWith("/")) {
//     return NextResponse.rewrite(new URL(`/user1`, request.url));
//   }
//   // return NextResponse.rewrite(new URL(`/user1`, request.url));
// } else if (pathname.startsWith("/go")) {
//   return NextResponse.rewrite(new URL(`/user1`, request.url));
// } else {
//   return NextResponse.next();
// }
