import Layout from "../src/components/Layout";
import Container from "../src/components/Container";

import { html, sources } from "../src/constants/conception-science";
import { getHtmlWithReferences } from "../src/utils/html";

export default () => {
  const htmlWithReferences = getHtmlWithReferences(html, sources);

  // if (!htmlWithReferences) {
  //   alert("References error!");
  // }

  return (
    <Layout headData={{ title: "" }}>
      <Container>
        <div
          dangerouslySetInnerHTML={{
            __html: htmlWithReferences,
          }}
        />
      </Container>
    </Layout>
  );
};
