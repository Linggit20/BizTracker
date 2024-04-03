import { Metadata } from "next"
import SignInForm from "../components/SignInForm"
import Link from "next/link"
import SocialLogin from "../components/SocialLogin"

export const metadata: Metadata = {
  title: "Login ",
  description: "Login",
}

export default function SignIn() {
  return (
    <div className="lg:flex-1 flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold leading-tight tracking-tighter">Login</h1>
        <p className="flex items-center gap-2">to continue to
          <span className="flex items-center gap-1 font-medium">
            BizTracker
          </span>
        </p>
      </div>
      <SocialLogin />
      <SignInForm />
      <p className="leading-none">Don&apos;t have an account? <Link href="/signup" className="text-primary">Sign Up</Link></p>
    </div>
  )
}
