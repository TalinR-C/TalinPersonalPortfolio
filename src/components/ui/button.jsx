import * as React from "react"

const buttonVariants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  outline: "border border-slate-200 bg-white hover:bg-slate-100 text-slate-900",
  ghost: "hover:bg-slate-100 text-slate-900",
  link: "text-blue-600 underline-offset-4 hover:underline"
}

const Button = React.forwardRef(({ 
  className = "",
  variant = "default",
  size = "default",
  ...props 
}, ref) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
        disabled:opacity-50 disabled:pointer-events-none
        ${buttonVariants[variant]}
        ${size === "sm" ? "h-9 px-3" : "h-10 py-2 px-4"}
        ${className}`}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }