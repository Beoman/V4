import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/login",
    signUp: "/register",
    error: "/auth/error",
    verifyRequest: "/auth/verify",
  },
})

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/settings/:path*",
  ],
} 