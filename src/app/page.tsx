import { ProtectedComponent } from "@/lib/auth";

export default function Home() {
  return (
    <ProtectedComponent roles={["ADMIN", "MODERATOR", "USER"]}>
   <section className="flex w-full h-full items-center justify-center">
        Welcome to SciQuest 
      </section>
    </ProtectedComponent>
  );
}
