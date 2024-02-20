import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
 
export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ['/'],
  afterAuth(auth, req){
    if(auth.userId && auth.isPublicRoute){
      let path = "/select-org"

      if(auth.orgId){
        path = `/organization/${auth.orgId}`
      }

      const orgSelection = new URL(path, req.url)
      return NextResponse.redirect(orgSelection)
    }
  }
});
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};