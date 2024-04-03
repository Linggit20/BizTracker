import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <footer className="py-4 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
        <p className="text-sm leading-none text-muted-foreground">Made with &#9825; by {" "}
          <Link
            className="underline"
            href="https://github.com/Linggit20"
            target="_blank"
          >
            Linggit20
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer