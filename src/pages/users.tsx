import { AddUser } from "@/components/module/user/AddUser";
// import { selectUsers } from "@/redux/features/user/userSlice";

const Users = () => {
  // const users = useAppSelector(selectUsers);
  // console.log(users);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">Users</h1>
        <AddUser></AddUser>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-5">
        {/* {users.map((user) => (
          <UserCard key={user.id} user={user}></UserCard>
        ))} */}
      </div>
    </div>
  );
};
export default Users;
