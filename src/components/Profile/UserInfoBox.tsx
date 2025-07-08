const UserInfoBox = ({
  number,
  name,
}: {
  number: number | string;
  name: string;
}) => {
  return (
    <div className="border hover:border-primary duration-300 hover:shadow border-border rounded-lg flex flex-col  gap-1  p-4">
      <h2 className="text-2xl sm:text-5xl bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent font-bold">
        {number}
      </h2>
      <h3 className="text-sm sm:text-base text-muted-foreground">{name}</h3>
    </div>
  );
};

export default UserInfoBox;
