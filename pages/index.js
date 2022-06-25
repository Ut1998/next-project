import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const route = useRouter();

  const handleClick = () => {
    alert("Placing your order");
    route.push("/product");
  };

  return (
    <>
      <h1>Home page</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      &nbsp; &nbsp;
      <Link href="/product">
        <a>Products</a>
      </Link>
      <br />
      <button onClick={handleClick}>Place order</button>
      <br />
      <Link href="/users">
        <a>Users</a>
      </Link>
      <br />
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </>
  );
};

export default Home;
