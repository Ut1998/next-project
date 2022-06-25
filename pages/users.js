import User from "../components/user";

const UsersList = ({ users }) => {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => {
        return (
          <ul key={user.id}>
            <User user={user} />
          </ul>
        );
      })}
    </>
  );
};

export default UsersList;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  console.log(data);

  return {
    props: { users: data },
  };
};
