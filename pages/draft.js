import Layout from "../src/components/Layout";
import Container from "../src/components/Container";

import { html, sources } from "../src/constants/answers/conversational-answers";
import { getHtmlWithReferences } from "../src/utils/html";

export default () => {
  const htmlWithReferences = sources ? getHtmlWithReferences(html, sources) : html;

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
