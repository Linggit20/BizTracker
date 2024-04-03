"use client"

import { FcGoogle } from "react-icons/fc"

import { Button } from "@/components/ui/button"

const SocialLogin = () => {
  return (
    <div className="max-w-lg">
      <Button
        className="w-full gap-2"
        type="button"
        variant="outline"
      >
        <FcGoogle className="h-[1.2rem] w-[1.2rem]"/> <span>Google</span>
      </Button>
      <div className="relative mt-4 flex items-center justify-center">
        <span className="text-sm text-muted-foreground text-center inline-block bg-background z-[1] px-3">
          Or continue with
        </span>
        <span className="border-t absolute w-full top-[10px]"></span>
      </div>
    </div>
  )
}

export default SocialLogin