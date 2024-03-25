import { LoginPage } from "@/components/ui/LoginPage"

type Props = {
  searchParams?: Record<"callbackUrl"|"error", string>
}

const SignInPage = (props: Props) => {
  return (
    <div className="bg-black p-2">
        <LoginPage error={props.searchParams?.error} callbackUrl={props.searchParams?.callbackUrl} />
    </div>
  )
}

export default SignInPage