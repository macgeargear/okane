import { SignIn } from "@clerk/nextjs";
import { useSignUp } from "@clerk/nextjs";

export default async function Page() {
  const { isLoaded, signUp, setActive } = useSignUp();
  await signUp?.authenticateWithRedirect({
    redirectUrl: "/",
    redirectUrlComplete: "/",
    strategy: "oauth_google",
  });
  return (
    <div className="container flex items-center justify-center">
      <SignIn path="/sign-in" />
      <div id="clerk-captcha"></div>
    </div>
  );
}
