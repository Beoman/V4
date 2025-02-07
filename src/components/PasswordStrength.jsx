"use client"

import { Progress } from "@/components/ui/progress"

export default function PasswordStrength({ password }) {
  const calculateStrength = (pwd) => {
    let strength = 0
    if (!pwd) return 0

    // Length check
    if (pwd.length >= 8) strength += 25

    // Contains number
    if (/\d/.test(pwd)) strength += 25

    // Contains lowercase
    if (/[a-z]/.test(pwd)) strength += 25

    // Contains uppercase
    if (/[A-Z]/.test(pwd)) strength += 25

    return strength
  }

  const getStrengthText = (strength) => {
    if (strength === 0) return "Very Weak"
    if (strength <= 25) return "Weak"
    if (strength <= 50) return "Fair"
    if (strength <= 75) return "Good"
    return "Strong"
  }

  const strength = calculateStrength(password)

  return (
    <div className="space-y-2">
      <Progress value={strength} className="h-2" />
      <p className="text-sm text-muted-foreground">
        Password Strength: {getStrengthText(strength)}
      </p>
    </div>
  )
}