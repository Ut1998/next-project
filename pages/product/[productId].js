import { useRouter } from "next/router";

const ProductDetails = () => {
  const route = useRouter();
  const productId = route.query.productId;

  const handleButtonClick = () => {
    alert(`Order placed for product ${productId}`);
    route.push("/");
  };

  return (
    <>
      <h1>Details about product {productId}</h1>
      <button onClick={handleButtonClick}>Order placed</button>
    </>
  );
};

export default ProductDetails;
