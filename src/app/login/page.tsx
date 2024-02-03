import Link from "next/link";
import one from "../../assets/image.svg"
import Image from "next/image"


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
    <div className="grid h-full justify-center  items-center  sm:grid-cols-2">
    <div className="flex flex-col w-full justify-center   items-center py-4 px-2">
        <p className=" text-center text-3xl  font-extrabold text-blue-500   mb-2 ">Login </p>
      <Card className="shadow-xl w-full  md:w-2/3 bg-gray-50 ">
        <CardHeader> 
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

    
    </div>
    <div  className="hidden sm:flex  justify-center items-center h-screen">
       
          <Image src={one} alt="test" layout="intrinsic"   />
        
      </div>


    </div>
  );
}
