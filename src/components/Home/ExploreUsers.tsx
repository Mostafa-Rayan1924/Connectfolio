import PersonExp from "./PersonExp";

const ExploreUsers = async () => {
  let fetchData = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users?limit=8&page=45`
  );
  if (!fetchData.ok) {
    throw new Error("Failed to fetch data");
  }
  let { data } = await fetchData.json();
  return (
    <div className="hidden md:flex items-center  gap-5">
      <PersonExp data={data} />
    </div>
  );
};

export default ExploreUsers;
