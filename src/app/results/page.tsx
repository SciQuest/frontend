import { ProtectedComponent } from "@/lib/auth";
import Navbar from "@/components/Navbar";

import PageContent from "./PageContent";
const page = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <ProtectedComponent roles={["USER"]}>
      <div>
        <Navbar />
        <PageContent searchParams={searchParams} />
      </div>
    </ProtectedComponent>
  );
};

export default page;
