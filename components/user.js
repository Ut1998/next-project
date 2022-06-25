const User = ({ user }) => {
  return (
    <>
      <li>{user.name}</li>
      <li>{user.email}</li>
    </>
  );
};

export default User;
