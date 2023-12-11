import { ProtectedComponent } from "@/lib/auth";

export default function Home() {
  return (
    <ProtectedComponent role="USER">
      <section className="flex w-full h-full items-center justify-center">
        Welcome to SciQuest
      </section>
    </ProtectedComponent>
  );
}
