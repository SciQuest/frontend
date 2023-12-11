import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import RegisterForm from "@/app/register/register-form";

export default function RegisterPage() {
  return (
    <main className="flex w-full min-h-full items-center justify-center py-4 md:px-2">
      <Card className="shadow-xl w-[90%] md:w-1/2 max-w-lg">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Welcome to <span className="font-semibold">SciQuest</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter>
          <p>
            Have an account?
            <Link
              href="/login"
              className="ml-1 text-primary font-medium underline"
            >
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
