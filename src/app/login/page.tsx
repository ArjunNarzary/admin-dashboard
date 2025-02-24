import { signIn, auth } from "@/auth"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

export default async function SignIn() {
  const session = await auth()
  if (session) {
    redirect("/")
  }
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <form
        action={async () => {
          "use server"
          await signIn("google")
        }}
      >
        <Button variant="outline" type="submit" className="p-4 px-6 shadow">
          <svg
            className="w-5 h-5"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#4285F4"
              d="M46.8 24.5c0-1.6-.1-3.2-.3-4.7H24v9h13c-.6 3-2.4 5.6-5 7.3v6h8.1c4.8-4.4 7.7-10.8 7.7-17.6z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.5 0 11.9-2.2 15.9-6.1l-8.1-6c-2.2 1.5-4.9 2.4-7.8 2.4-6-0-11.1-4.1-12.9-9.6H2.7v6c4 7.8 12 13.3 21.3 13.3z"
            />
            <path
              fill="#FBBC05"
              d="M11.1 28.7c-1-2.9-1-6.1-0-9h-8.4v-6c-3.5 6.9-3.5 15.1-0 22.1l8.4-6z"
            />
            <path
              fill="#EA4335"
              d="M24 9.5c3.5-0 6.7 1.2 9.1 3.6l6.8-6.8C35.9 2.2 30.5 0 24 0 14.7 0 6.7 5.5 2.7 13.3l8.4 6c1.9-5.6 6.9-9.8 12.9-9.8z"
            />
          </svg>
          Signin with Google
        </Button>
      </form>
    </div>
  )
}
