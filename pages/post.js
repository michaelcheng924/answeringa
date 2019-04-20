import fetch from "isomorphic-fetch";
import { Link } from "../routes";

import Layout from "../src/components/Layout";
import ImageHeader from "../src/components/ImageHeader";
import Container from "../src/components/Container";

const Post = post => {
  const data = {
    title: post.title,
    subtitle: post.excerpt,
    image: post.featured_image,
    url: `/answers/${post.slug}`
  };

  return (
    <Layout headData={data}>
      <ImageHeader {...data} />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Container>
    </Layout>
  );
};

Post.getInitialProps = async ({ query }) => {
  const response = await fetch(
    `https://public-api.wordpress.com/rest/v1.1/sites/answeringabortion.wordpress.com/posts/slug:${
      query.slug
    }`
  ).then(r => r.json());

  return response;
};

export default Post;

// https://public-api.wordpress.com/rest/v1.1/sites/answeringabortion.wordpress.com/posts/
