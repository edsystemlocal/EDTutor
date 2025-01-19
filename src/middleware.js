import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("authToken") || req.headers.get("authorization");

  // Protected route paths
  const protectedPaths = ["/dashboard"];

  const isProtected = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (isProtected && !token) {
    // Redirect to login page if no token is found
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Allow the request if token exists or it's not a protected route
  return NextResponse.next();
}

// Define the routes the middleware applies to
export const config = {
  matcher: ["/home", "/dashboard/:path*"], // Protect specific routes
};
