import LoginForm from "@/components/loginform";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center pt-12">
      <h1>Hey, it's time to sign In!</h1>
      <LoginForm />
      <p>
        Don't you have an account?
        <Link className="mx-2 underline" href="register">Register</Link>
      </p>
    </div>
  );
}
