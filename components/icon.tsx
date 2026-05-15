"use client"

import Image from "next/image"
import { useState } from "react"

// Fallback SVG icons
const fallbackIcons: Record<string, React.ReactNode> = {
  "sm-wardrobe": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full">
      <path fill="#7c3aed" d="M40 42H8V8a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v34z"/>
      <path fill="#a78bfa" d="M8 42h32v2H8zM24 6v36"/>
      <path fill="none" stroke="#4c1d95" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M24 6v36M8 42h32M40 42V8a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v34"/>
      <circle cx="20" cy="24" r="1.5" fill="#4c1d95"/>
      <circle cx="28" cy="24" r="1.5" fill="#4c1d95"/>
      <path fill="#ddd6fe" d="M12 12h8v6h-8zM28 12h8v6h-8z"/>
      <path fill="none" stroke="#4c1d95" strokeLinecap="round" strokeWidth="1.5" d="M12 22v14M36 22v14"/>
    </svg>
  ),
  "weather": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="20" cy="20" r="8" fill="#fbbf24"/>
      <path fill="#fde68a" d="M20 8v-4M20 36v-4M8 20H4M36 20h-4M11.515 11.515l-2.829-2.829M31.314 31.314l-2.828-2.828M28.485 11.515l2.829-2.829M8.686 31.314l2.828-2.828"/>
      <path fill="#7c3aed" d="M38 32a6 6 0 0 0-6-6 8 8 0 0 0-15.54 1A5 5 0 0 0 17 37h19a6 6 0 0 0 2-5z"/>
      <path fill="#a78bfa" d="M22 37h14a6 6 0 0 0 0-12 8 8 0 0 0-15.54 1"/>
      <path fill="none" stroke="#4c1d95" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 37h19a6 6 0 0 0 0-12 8 8 0 0 0-15.54 1A5 5 0 0 0 17 37z"/>
    </svg>
  ),
  "calendar": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full">
      <rect x="6" y="10" width="36" height="32" rx="3" fill="#7c3aed"/>
      <path fill="#a78bfa" d="M6 17h36v22a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V17z"/>
      <path fill="#ddd6fe" d="M6 13a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v4H6v-4z"/>
      <path fill="none" stroke="#4c1d95" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 17h36M42 39V13a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v26a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3z"/>
      <path fill="none" stroke="#4c1d95" strokeLinecap="round" strokeWidth="2" d="M16 6v8M32 6v8"/>
      <rect x="12" y="23" width="6" height="5" rx="1" fill="#4c1d95"/>
      <rect x="21" y="23" width="6" height="5" rx="1" fill="#7c3aed"/>
      <rect x="30" y="23" width="6" height="5" rx="1" fill="#7c3aed"/>
      <rect x="12" y="32" width="6" height="5" rx="1" fill="#7c3aed"/>
      <rect x="21" y="32" width="6" height="5" rx="1" fill="#7c3aed"/>
    </svg>
  ),
  "checkmark": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="24" cy="24" r="18" fill="#7c3aed"/>
      <circle cx="24" cy="24" r="14" fill="#a78bfa"/>
      <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M16 24l6 6 12-12"/>
      <path fill="none" stroke="#4c1d95" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M24 6a18 18 0 1 0 18 18A18 18 0 0 0 24 6z"/>
      <circle cx="36" cy="12" r="4" fill="#fbbf24"/>
      <path fill="none" stroke="#fbbf24" strokeLinecap="round" strokeWidth="2" d="M36 6v-2M42 12h2M36 18v2M30 12h-2"/>
    </svg>
  ),
  "add-clothes": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full">
      <path fill="#7c3aed" d="M36 14l-6-8h-12l-6 8-6 4v6h4v18h28V24h4v-6l-6-4z"/>
      <path fill="#a78bfa" d="M10 24v18h28V24"/>
      <path fill="#ddd6fe" d="M18 6h12l4 5.33L24 16l-10-4.67L18 6z"/>
      <path fill="none" stroke="#4c1d95" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M36 14l-6-8h-12l-6 8-6 4v6h4v18h28V24h4v-6l-6-4zM24 16v-10"/>
      <circle cx="38" cy="38" r="8" fill="#fbbf24"/>
      <path fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2.5" d="M38 34v8M34 38h8"/>
    </svg>
  ),
  "check-weather": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="18" cy="18" r="7" fill="#fbbf24"/>
      <path stroke="#fbbf24" strokeLinecap="round" strokeWidth="2" d="M18 7v-3M18 32v-3M7 18H4M32 18h-3M10.343 10.343L8.222 8.222M27.778 27.778l-2.121-2.121M25.657 10.343l2.121-2.121M8.222 27.778l2.121-2.121"/>
      <path fill="#7c3aed" d="M40 30a5 5 0 0 0-5-5 7 7 0 0 0-13.58.88A4.37 4.37 0 0 0 17 35h18a5 5 0 0 0 5-5z"/>
      <path fill="#a78bfa" d="M35 35H17a4.37 4.37 0 0 1 4.42-9.12A7 7 0 0 1 35 25a5 5 0 0 1 0 10z"/>
      <path fill="none" stroke="#4c1d95" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 35h18a5 5 0 0 0 0-10 7 7 0 0 0-13.58.88A4.37 4.37 0 0 0 17 35z"/>
      <circle cx="10" cy="38" r="6" fill="#7c3aed"/>
      <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 38l2 2 4-4"/>
    </svg>
  ),
  "plan-week": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full">
      <rect x="4" y="8" width="40" height="34" rx="3" fill="#7c3aed"/>
      <path fill="#a78bfa" d="M4 16h40v23a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V16z"/>
      <path fill="#ddd6fe" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v5H4v-5z"/>
      <path fill="none" stroke="#4c1d95" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16h40M44 42V11a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v31a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3z"/>
      <path fill="none" stroke="#4c1d95" strokeLinecap="round" strokeWidth="2" d="M14 4v8M34 4v8"/>
      <rect x="9" y="21" width="6" height="6" rx="1" fill="#4c1d95"/>
      <rect x="9" y="31" width="6" height="6" rx="1" fill="#ddd6fe"/>
      <rect x="21" y="21" width="6" height="6" rx="1" fill="#4c1d95"/>
      <rect x="21" y="31" width="6" height="6" rx="1" fill="#4c1d95"/>
      <rect x="33" y="21" width="6" height="6" rx="1" fill="#ddd6fe"/>
      <rect x="33" y="31" width="6" height="6" rx="1" fill="#ddd6fe"/>
      <path fill="none" stroke="#fbbf24" strokeLinecap="round" strokeWidth="2" d="M10 24l2 2 3-3M22 24l2 2 3-3M22 34l2 2 3-3"/>
    </svg>
  ),
  "ai-suggestions": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="24" cy="24" r="16" fill="#7c3aed"/>
      <circle cx="24" cy="24" r="12" fill="#a78bfa"/>
      <path fill="#ddd6fe" d="M24 14l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/>
      <path fill="none" stroke="#4c1d95" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M24 8a16 16 0 1 0 16 16A16 16 0 0 0 24 8z"/>
      <circle cx="38" cy="10" r="5" fill="#fbbf24"/>
      <path fill="#fff" d="M38 7v6M35 10h6" strokeLinecap="round" strokeWidth="1.5"/>
      <path fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2" d="M20 24l3 3 6-6"/>
    </svg>
  ),
}

interface IconProps {
  name: string
  className?: string
  size?: number
}

export function Icon({ name, className = "", size = 32 }: IconProps) {
  const [hasError, setHasError] = useState(false)
  const iconPath = `/assets/icons/${name}.svg`
  
  // Check if we should show fallback
  const showFallback = hasError || !iconPath
  
  if (showFallback && fallbackIcons[name]) {
    return (
      <div className={className} style={{ width: size, height: size }}>
        {fallbackIcons[name]}
      </div>
    )
  }
  
  return (
    <Image
      src={iconPath}
      alt={name}
      width={size}
      height={size}
      className={className}
      onError={() => setHasError(true)}
    />
  )
}
