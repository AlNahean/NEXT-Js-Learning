import Link from "next/link";

const index = ({ posts }) => {
  // console.log(posts);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data.slice(0, 5),
    },
  };
};
export default index;
