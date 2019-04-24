import fetch from "isomorphic-fetch";
import { Link } from "../routes";
import moment from "moment";

import Layout from "../src/components/Layout";
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
        title: "Answering Abortion: Equipping the Fight against Abortion",
      }}
    >
      <div className="banner-container">
        <div className="banner-image-section">
          <img className="banner-image" src="/static/images/home-7-weeks.jpg" />
          <div className="banner-image-caption">
            3d rendered medically accurate illustration of a human fetus,{" "}
            <strong>week 7</strong>
          </div>
        </div>
        <div className="banner-title bebas">
          Equipping the fight against abortion
        </div>
      </div>
      <Container>
        {posts.map(post => {
          return (
            <Link key={post.ID} href={`/answers/${post.slug}`}>
              <div
                className="d-flex align-items-center"
                style={{
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    background: `url(${post.featured_image})`,
                    backgroundSize: `cover`,
                    flexShrink: 0,
                    height: 80,
                    marginRight: 20,
                    width: 80,
                  }}
                />
                <div>
                  <h3
                    className="nomargin"
                    dangerouslySetInnerHTML={{
                      __html: post.title,
                    }}
                  />
                  <div className="gray">{moment(post.date).fromNow()}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </Container>

      <style jsx>{`
        .banner-container {
          align-items: center;
          display: flex;
        }

        .banner-image-section {
          display: flex;
          flex-shrink: 0;
          justify-content: center;
          padding: 20px;
          position: relative;
        }

        .banner-image-caption {
          color: #757575;
          left: 20px;
          line-height: 1.3;
          position: absolute;
          top: 20px;
          width: 50%;
        }

        .banner-title {
          font-size: 50px;
          padding: 20px;
        }

        @media (max-width: 1000px) {
          .banner-image-caption {
            font-size: 16px;
          }
        }

        @media (max-width: 768px) {
          .banner-container {
            flex-direction: column;
          }

          .banner-title {
            line-height: 1.1;
            order: -1;
          }

          .banner-image-section {
            display: flex;
            padding: 0 20px;
          }

          .banner-image {
            height: 50%;
            width: 50%;
          }

          .banner-image-caption {
            position: relative;
          }
        }
      `}</style>
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
