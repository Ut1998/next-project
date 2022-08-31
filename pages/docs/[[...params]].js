import { useRouter } from "next/router";

const Docs = () => {
  const route = useRouter();
  const { params = [] } = route.query;
  console.log(params);

  if (params.length === 2) {
    return (
      <h2>
        Viewing docs for feature {params[0]} and concept {params[1]}{" "}
      </h2>
    );
  } else if (params.length === 1) {
    return <h2> View docs for {params[0]}</h2>;
  }
  return <h1>Docs Home page</h1>;
};

export default Docs;
