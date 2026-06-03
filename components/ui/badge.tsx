import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium shrink-0 transition-all duration-200 overflow-hidden [&>svg]:size-4 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",

        secondary:
    "border-transparent bg-secondary text-[var(--chart-4)] [a&]:hover:bg-secondary/90",

        destructive:
          "border-transparent bg-destructive text-white hover:bg-destructive/90",

        outline:
          "border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
)

const Badge = React.forwardRef<
  HTMLSpanElement,
  React.ComponentProps<"span"> &
    VariantProps<typeof badgeVariants> & {
      asChild?: boolean
    }
>(({ className, variant, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      ref={ref}
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
})

Badge.displayName = "Badge"

export { Badge, badgeVariants }