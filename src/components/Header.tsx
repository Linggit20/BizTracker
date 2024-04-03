"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import ThemeToggle from "./ThemeToggle"
import MobileNav from "./MobileNav"

const Header = () => {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="font-bold text-2xl text-primary">
          <span>BizTracker</span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
          <div className="hidden lg:flex items-center gap-2">
            <Button asChild variant="ghost">
              <Link href="/signin">
                Sign In
              </Link>
            </Button>
            <Button asChild>
              <Link href="/signup">
                Try Free
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header