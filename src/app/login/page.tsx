import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import LoginForm from "@/app/login/login-form";

export default function LoginPage() {
  return (
    <main className="flex w-full h-full items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Welcome to <span className="font-semibold">SciQuest</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter>
          <p>
            Don&apos;t have an account?
            <Link
              href="/register"
              className="ml-1 text-primary font-medium underline"
            >
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
