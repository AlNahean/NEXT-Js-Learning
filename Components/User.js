const User = ({ user }) => {
  console.log(user);
  return (
    <>
      <div key={user.id}>
        <div>
          id:{user.id} {"   "} {user.name}
        </div>
        <div>{user.email}</div>
      </div>
    </>
  );
};

export default User;
