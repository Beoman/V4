import { NextResponse } from "next/server"

export function errorResponse(message: string, status: number = 500) {
  return NextResponse.json(
    { error: message },
    { status }
  )
}

export function successResponse(data: any) {
  return NextResponse.json(data)
}

export function unauthorizedResponse() {
  return errorResponse("Unauthorized", 401)
}

export function forbiddenResponse() {
  return errorResponse("Forbidden", 403)
}

export function notFoundResponse(resource: string = "Resource") {
  return errorResponse(`${resource} not found`, 404)
} 