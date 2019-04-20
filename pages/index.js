import fetch from "isomorphic-fetch";
import { Link } from "../routes";

import Layout from "../src/components/Layout";
import ImageHeader from "../src/components/ImageHeader";
import Container from "../src/components/Container";

// prolife answers
// statistics
// store
// organize (directory, events)
// news
// newsletter (receive updates and information)

const Home = ({ posts }) => {
  return (
    <Layout
      headData={{
        title: "Answering Abortion: Equipping the Fight against Abortion"
      }}
    >
      <Container>
        {posts.map(post => {
          return (
            <Link key={post.ID} href={`/answers/${post.slug}`}>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.title
                }}
              />
            </Link>
          );
        })}
      </Container>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const response = await fetch(
    "https://public-api.wordpress.com/rest/v1.1/sites/answeringabortion.wordpress.com/posts/"
  ).then(r => r.json());

  return response;
};

export default Home;

// https://public-api.wordpress.com/rest/v1.1/sites/answeringabortion.wordpress.com/posts/
