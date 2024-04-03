import Image from "next/image"
import { ReactNode } from "react"


export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex-1 container flex items-center justify-center gap-5">
      {children}
      <div className="hidden lg:block lg:w-1/2">
        <Image
          src="/assets/auth-image.svg"
          alt="Side Image"
          width={668}
          height={540}
        />
      </div>
    </main>
  )
}
