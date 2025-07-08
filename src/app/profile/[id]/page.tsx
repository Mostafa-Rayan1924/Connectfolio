import ProfilePage from "../ProfilePage";
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <ProfilePage id={id} />;
};

export default page;
