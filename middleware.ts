import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  //unprotected routes doesnt require sign in
  publicRoutes: ["/", "/api/webhook"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
