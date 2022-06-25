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
      <button onClick={handleClick}>Place order</button>
    </>
  );
};

export default Home;
