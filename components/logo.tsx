import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  href?: string
  priority?: boolean
}

export function Logo({ className, href = "/", priority = false }: LogoProps) {
  const image = (
    <Image
      src="/logo.png"
      alt="FitWeek"
      width={971}
      height={257}
      priority={priority}
      className={cn("h-8 w-auto", className)}
    />
  )

  if (!href) return image

  return (
    <Link href={href} className="inline-flex items-center group">
      <span className="transition-transform duration-300 group-hover:scale-105">
        {image}
      </span>
    </Link>
  )
}
