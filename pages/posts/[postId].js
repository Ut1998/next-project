const Post = ({ post }) => {
  return (
    <>
      <h1>Data for post {post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const paths = posts.map((post) => ({
    params: { postId: `${post.id}` },
  }));

  return { paths: paths, fallback: false };
}

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};
