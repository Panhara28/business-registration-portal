import Link from 'next/link'
import type { VariantProps } from 'class-variance-authority'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/**
 * A navigation link styled as a button.
 *
 * The project's Button is a base-ui primitive (it uses `render`, not `asChild`),
 * so links are styled with `buttonVariants` instead of being wrapped. Heights are
 * nudged up from the compact defaults to suit a public-facing government site.
 */
export function LinkButton({
  href,
  className,
  variant,
  size = 'lg',
  children,
  ...props
}: React.ComponentProps<typeof Link> & VariantProps<typeof buttonVariants>) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), 'h-10 gap-2 px-5', className)}
      {...props}
    >
      {children}
    </Link>
  )
}
