import { getUsers } from "@/api/api";
import PersonExp from "./PersonExp";

const ExploreUsers = async () => {
  let data = await getUsers(45);
  return (
    <div className="hidden md:flex items-center  gap-5">
      <PersonExp data={data.data} />
    </div>
  );
};

export default ExploreUsers;
