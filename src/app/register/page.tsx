import Link from "next/link";
import one from "../../assets/image.svg";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import RegisterForm from "@/app/register/register-form";

export default function RegisterPage() {
  return (
    <div className="grid grid-cols-1 h-full justify-center  items-center  sm:grid-cols-2">
      <div className="flex flex-col w-full   items-center justify-center py-4 px-2">
        <p className=" text-center text-3xl  font-extrabold text-blue-500    mb-2 ">
          Register
        </p>
        <Card className=" items-center shadow-xl  w-full  md:w-5/6 lg:w-3/4 bg-gray-50 max-w-lg">
          <CardHeader></CardHeader>
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
      </div>

      <div className=" hidden sm:flex justify-center items-center h-screen">
        <Image src={one} alt="test" layout="intrinsic" />
      </div>
    </div>
  );
}
