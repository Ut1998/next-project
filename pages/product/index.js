import Link from "next/link";
import { useRouter } from "next/router";

const ProductList = () => {
  const route = useRouter();
  const productId = route.query.productId;

  console.log(productId);

  return (
    <>
      <Link href="/product/1">
        <a>Product 1</a>
      </Link>
      <br />
      <br />
      <Link href="/product/2">
        <a>Product 2</a>
      </Link>
      <br />
      <br />
      <Link href="/product/3" replace>
        <a>Product 3</a>
      </Link>
    </>
  );
};

export default ProductList;
