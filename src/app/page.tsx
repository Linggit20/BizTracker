import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex-1">
      <div className="container relative">
        <section className="mx-auto flex max-w-[995px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Track Your Business Profits with Ease
          </h1>
          <h2 className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
            Simplify profit tracking for your business and make informed decisions.
          </h2>
          <span className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
            BizTracker helps businesses track profits effortlessly, giving you valuable insights to grow your business.
          </span>
          <Button asChild>
            <Link href="/signup" className="mt-4">
              Get Started
            </Link>
          </Button>
        </section>
        <div className="flex items-center justify-center">
          <Image
            src="/assets/landing-image.svg"
            alt=""
            height={100}
            width={600}
          />
        </div>
      </div>
    </main>
  )
}
