import { Metadata } from "next"
import SignUpForm from "../components/SignUpForm"
import SocialLogin from "../components/SocialLogin"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create Account",
}

export default function SignUp() {
  return (
    <div className="lg:flex-1 flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold leading-tight tracking-tighter">Create Account</h1>
        <p className="flex items-center gap-2">to continue to
          <span className="flex items-center gap-1 font-medium">
            BizTracker
          </span>
        </p>
      </div>
      <SocialLogin />
      <SignUpForm />
      <p className="leading-none">Already have an account? <Link href="/signin" className="text-primary">Sign In</Link></p>
    </div>
  )
}
