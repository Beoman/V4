// Basic toast hook implementation
import { useState } from 'react'

export function useToast() {
  const [toasts, setToasts] = useState([])

  const toast = ({ title, description, variant = 'default' }) => {
    setToasts(prev => [...prev, { title, description, variant }])
  }

  return { toast }
} 