import * as React from "react"

const badgeVariants = {
  default: "bg-slate-900 text-slate-50",
  secondary: "bg-slate-100 text-slate-900",
  outline: "text-slate-900 border border-slate-200"
}

const Badge = React.forwardRef(({ 
  className,
  variant = "default",
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors
        ${badgeVariants[variant]}
        ${className}`}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge }