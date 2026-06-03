import Link from "next/link"

export function PremiumLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative">
        {/* Simple icon container */}
        <div className="relative bg-gradient-to-br from-blue-600 to-blue-500 p-2 rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-300">
          <svg
            viewBox="0 0 40 40"
            className="w-8 h-8 text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* WB monogram */}
            <path
              d="M5 8L9 28L13 14L17 28L21 8"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25 8V28M25 8H30C31.5 8 33 9.5 33 11V14C33 15.5 31.5 16.5 30 16.5H25M25 19.5H30C31.5 19.5 33 21 33 22.5V25C33 27 31.5 28 30 28H25"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Clean text branding */}
      <div className="flex flex-col">
        <span className="text-lg font-bold text-foreground leading-tight group-hover:text-blue-600 transition-colors">
          WEBESIDE
        </span>
        <span className="text-[9px] font-medium tracking-wider text-muted-foreground uppercase">Technology</span>
      </div>
    </Link>
  )
}
