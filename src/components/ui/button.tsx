import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-bounce focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 uppercase tracking-wide",
  {
    variants: {
      variant: {
        default: "gradient-gold text-primary-foreground shadow-gold hover:shadow-[0_6px_24px_hsl(40_95%_50%/0.5)] hover:scale-105 border-2 border-yellow-600",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-stone",
        outline: "border-3 border-border bg-card hover:bg-muted hover:border-primary shadow-stone",
        secondary: "gradient-premium text-secondary-foreground shadow-premium hover:shadow-[0_6px_24px_hsl(270_60%_50%/0.4)] hover:scale-105 border-2 border-purple-700",
        ghost: "hover:bg-muted/50 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        wood: "gradient-wood text-white shadow-wood hover:shadow-[0_8px_20px_hsl(0_0%_0%/0.4)] hover:scale-105 border-2 border-amber-900",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-xl px-10 text-base",
        xl: "h-16 rounded-xl px-12 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
