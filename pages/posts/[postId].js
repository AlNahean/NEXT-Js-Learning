import { useRouter } from "next/router";
const postId = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  console.log(post);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};
export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((post) => ({ params: { postId: `${post.id}` } }));
  // this has to be a string

  return {
    paths: [{ params: { postId: "1" } }],
    // paths: paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async (context) => {
  console.log(context);
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
};

export default postId;
