"use client";

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  const [date, setDate] = React.useState(new Date())

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay()

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const weeks = []
  let week = Array(7).fill(null)

  days.forEach((day, index) => {
    const dayIndex = (firstDayOfMonth + index) % 7
    week[dayIndex] = day
    if (dayIndex === 6 || index === days.length - 1) {
      weeks.push([...week])
      week = Array(7).fill(null)
    }
  })

  return (
    <div className={cn("p-3", className)} {...props}>
      <div className="flex justify-between items-center mb-4">
        <Button
          variant="outline"
          className="h-7 w-7 p-0"
          onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="font-semibold">
          {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </div>
        <Button
          variant="outline"
          className="h-7 w-7 p-0"
          onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <div key={day} className="text-muted-foreground">{day}</div>
        ))}
        {weeks.map((week, i) => (
          week.map((day, j) => (
            <Button
              key={`${i}-${j}`}
              variant="ghost"
              className={cn(
                "h-8 w-8 p-0 font-normal",
                !day && "invisible",
                day === new Date().getDate() && 
                date.getMonth() === new Date().getMonth() && 
                "bg-primary text-primary-foreground"
              )}
            >
              {day}
            </Button>
          ))
        ))}
      </div>
    </div>
  )
}
