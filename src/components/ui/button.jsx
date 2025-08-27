alWebsite/TalinPersonalPortfolio/src/components/ui/button.jsx
import * as React from "react"

const buttonVariants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  outline: "border border-slate-200 bg-white hover:bg-slate-100 text-slate-900",
  ghost: "hover:bg-slate-100 text-slate-900",
  link: "text-blue-600 underline-offset-4 hover:underline"
}

const Button = React.forwardRef(({ 
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? "a" : "button"
  
  return (
    <Comp
      ref={ref}
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors 
        disabled:opacity-50 disabled:pointer-events-none
        ${buttonVariants[variant]}
        ${size === "sm" ? "h-9 px-3" : "h-10 py-2 px-4"}
        ${className}`}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }