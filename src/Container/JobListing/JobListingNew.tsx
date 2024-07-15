import Sidebar from "@Container/JobListing/components/Sidebar";

export const JobListingNew = (props: any) => {
  const { data, searchJob, setSearchJob, refetch } = props;

  return (
    <div className=" h-full w-[100vw] ">
      <Sidebar data={data} searchJob={searchJob} setSearchJob={setSearchJob} refetch = {refetch}/>
    </div>
  );
};
