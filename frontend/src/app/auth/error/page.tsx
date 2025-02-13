"use client"

import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function ErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-full max-w-[400px]">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Icons.warning className="h-8 w-8 text-destructive" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Authentication Error
          </h1>
          <p className="text-sm text-muted-foreground">
            {error || "Something went wrong during authentication."}
          </p>
        </CardHeader>
        <CardContent className="text-center">
          <Link
            href="/login"
            className="text-sm text-primary underline-offset-4 hover:underline"
          >
            Back to login
          </Link>
        </CardContent>
      </Card>
    </div>
  )
} 