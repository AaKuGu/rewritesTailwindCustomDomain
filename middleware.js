import { NextResponse, NextRequest } from "next/server";

export async function middleware(request) {
  const { hostname, pathname, searchParams } = new URL(request.url);
  console.log("🚀 ~ hostname:", hostname);
  console.log("🚀 ~ pathname dpkg:", pathname);
  console.log("🚀 ~ pathname dpkg:", pathname.startsWith("/go"));

  if (hostname !== "localhost") {
    return NextResponse.rewrite(new URL(`/user1`, request.url));
  } else if (pathname.startsWith("/go")) {
    return NextResponse.rewrite(new URL(`/user1`, request.url));
  } else {
    return NextResponse.next();
  }
}
