import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function useAuth({ middleware, redirectIfAuthenticated } = {}) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") return

    if (!session && middleware === "auth") {
      router.push("/login")
    }

    if (session && redirectIfAuthenticated) {
      router.push(redirectIfAuthenticated)
    }
  }, [session, status, middleware, redirectIfAuthenticated, router])

  return { session, status }
} 