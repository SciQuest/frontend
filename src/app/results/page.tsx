import Navbar from "@/components/Navbar";

import PageContent from "./PageContent";
const page = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div>
      <Navbar />
      <PageContent searchParams={searchParams} />
    </div>
  );
};

export default page;
