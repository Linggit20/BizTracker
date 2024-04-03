import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"


const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="lg:hidden" variant="ghost" size="icon">
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left text-primary">
            <SheetTrigger asChild>
              <Link href="/">BizTracker</Link>
            </SheetTrigger>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col py-4 pt-8 gap-4">
          <SheetTrigger asChild>
            <Button asChild variant="outline">
              <Link href="/signin">Sign In</Link>
            </Button>
          </SheetTrigger>
          <SheetTrigger asChild>
            <Button asChild >
              <Link href="/signup">Try Free</Link>
            </Button>
          </SheetTrigger>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav