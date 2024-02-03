import { ProtectedComponent } from "@/lib/auth";
import User from "./user";
import PageContent from "./content";

export default function AdminPage() {
  return (
    <ProtectedComponent roles={["ADMIN"]}>
      <div className="flex h-full">
        <div className="bg-blue-500 items-center justify-center w-1/5">
          <User />
          <p className="text-center text-xl text-white font-semibold py-5">
            <a href="adminmoderators">List of moderators </a>
          </p>
          <p className="text-center text-xl text-blue-500 font-semibold py-5 bg-white ">
            List of articles
          </p>
        </div>

        <div className="relative overflow-x-auto w-4/5 px-2 bg-gray-100  shadow-md sm:rounded-lg">
          <p className="text-center text-4xl py-12 font-extrabold text-blue-500   mb-2 ">
            List of articles
          </p>

          <PageContent />
        </div>
      </div>
    </ProtectedComponent>
  );
}
