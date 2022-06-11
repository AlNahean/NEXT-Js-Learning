const Users = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          id:{user.id} {"   "} {user.name}
          <div>{user.email}</div>
        </div>
      ))}
    </div>
  );
};

export default Users;
