import User from "../Components/User";
import Users from "../Components/Users";

const users = ({ users = [] }) => {
  console.log(users);
  return (
    <div>
      {/* {users.map((user) => (
        <div key={user.id}>
          id:{user.id} {"   "} {user.name}
          <div>{user.email}</div>
        </div>
      ))} */}
      <Users users={users} />

      {/* {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))} */}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
};

export default users;
