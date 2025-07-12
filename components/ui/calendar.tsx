"use client"

import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "group/calendar p-3",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("flex gap-4 flex-col md:flex-row relative", defaultClassNames.months),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn("flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between", defaultClassNames.nav),
        button_previous: cn(buttonVariants({ variant: buttonVariant }), "size-(--cell-size) aria-disabled:opacity-50 p-0", defaultClassNames.button_previous),
        button_next: cn(buttonVariants({ variant: buttonVariant }), "size-(--cell-size) aria-disabled:opacity-50 p-0", defaultClassNames.button_next),
        month_caption: cn("flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)", defaultClassNames.month_caption),
        dropdowns: cn("w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5", defaultClassNames.dropdowns),
        dropdown_root: cn("relative border border-white/40 shadow-none rounded-md", defaultClassNames.dropdown_root),
        dropdown: cn("absolute bg-transparent inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn("select-none font-medium text-white", defaultClassNames.caption_label),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn("text-white/80 rounded-md flex-1 font-normal text-[0.8rem] select-none", defaultClassNames.weekday),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn("select-none w-(--cell-size)", defaultClassNames.week_number_header),
        week_number: cn("text-[0.8rem] select-none text-white/40", defaultClassNames.week_number),
        day: cn(
          "relative w-full h-full p-0 text-center group/day aspect-square select-none text-white focus-visible:ring-white cursor-pointer",
          defaultClassNames.day
        ),
        range_start: cn("rounded-l-md bg-white text-[#5A582F]", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-white text-[#5A582F]", defaultClassNames.range_end),
        today: cn(" text-white rounded-md", defaultClassNames.today),
        outside: cn("text-white/30", defaultClassNames.outside),
        disabled: cn(
          "text-white opacity-40 cursor-not-allowed bg-transparent shadow-none hover:bg-transparent",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return <ChevronLeftIcon className={cn("size-4", className)} {...props} />
          }
          if (orientation === "right") {
            return <ChevronRightIcon className={cn("size-4", className)} {...props} />
          }
          return <ChevronDownIcon className={cn("size-4", className)} {...props} />
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => (
          <td {...props}>
            <div className="flex size-(--cell-size) items-center justify-center text-center">{children}</div>
          </td>
        ),
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  disabled,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      disabled={disabled}
className={cn(
  "flex flex-col gap-1 leading-none font-normal",
  !disabled
    ? "cursor-pointer hover:bg-white/10 rounded-"
    : "cursor-not-allowed hover:bg-transparent rounded-none shadow-none pointer-events-none",
  "data-[selected-single=true]:bg-white data-[selected-single=true]:text-[#5A582F]",
  "data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground",
  "data-[range-start=true]:bg-white data-[range-start=true]:text-[#5A582F]",
  "data-[range-end=true]:bg-white data-[range-end=true]:text-[#5A582F]",
  "focus-visible:ring-white",
  disabled && !(
    modifiers.selected || 
    modifiers.range_start || 
    modifiers.range_end || 
    modifiers.range_middle
  ) && "text-white/70 bg-transparent",
  defaultClassNames.day,
  className
)}

      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
