"use client"

import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import Link from "next/link"

export default function VerifyPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-full max-w-[400px]">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Icons.mail className="h-8 w-8" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Check your email
          </h1>
          <p className="text-sm text-muted-foreground">
            A sign in link has been sent to your email address.
          </p>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground">
            Click the link in your email to sign in.
            <br />
            You can close this window.
          </p>
          <div className="mt-4">
            <Link
              href="/login"
              className="text-sm text-primary underline-offset-4 hover:underline"
            >
              Back to login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 