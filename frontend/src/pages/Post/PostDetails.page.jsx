import { Link } from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Button, Container } from "@mantine/core";
import { useLoaderData } from "react-router-dom";


function PostDetailsPage() {
  const posts = useLoaderData();
  return (
    <>
      <Container>
        <div className="post-page">
          <div className="categories">
            <p>{posts.userId}</p>
            <h1>
              {posts.title}
            </h1>
            <h2>{posts.category}</h2>
            <p>{posts.content}</p>
          </div>
         <img className="cover-image" src={posts.image} alt={posts.title} />
        </div>
        <Button>
          <Link to="/posts">Back to Posts</Link>
        </Button>
      </Container>
    </>
  );
}

export const postDetailsLoader = async ({ params }) => {
  const res = await axios.get(`${DOMAIN}/api/posts/${params.id}`);
  return res.data;
};

export default PostDetailsPage;