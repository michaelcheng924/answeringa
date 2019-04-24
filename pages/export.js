import fetch from "isomorphic-fetch";
import _ from "lodash";

import { useEffect } from "react";

export const pages = ["/", "privacy-policy", "terms-of-service"];

let exports = {};

pages.forEach(page => {
  exports = {
    ...exports,
    [page]: { page },
  };
});

let textareaRef;

const Export = ({ posts }) => {
  useEffect(() => {
    textareaRef.select();
  });

  posts.forEach(item => {
    let urlPrefix = ``;

    if (_.get(item, "tags.answers", "")) {
      urlPrefix = "/answers/";
    }

    exports = {
      ...exports,
      [`${urlPrefix}${item.slug}`]: {
        page: "/post",
        query: { slug: item.slug },
      },
    };
  });

  let finalExport = `module.exports = {
    exportPathMap: function() {
      return ${JSON.stringify(exports)};
    }
  };
  `;

  return (
    <div>
      {Object.keys(exports).length}
      <textarea
        ref={textarea => (textareaRef = textarea)}
        style={{ width: "100%", height: "100vh" }}
        defaultValue={finalExport}
      />
    </div>
  );
};

Export.getInitialProps = async () => {
  const response = await fetch(
    "https://public-api.wordpress.com/rest/v1.1/sites/answeringabortion.wordpress.com/posts/"
  ).then(r => r.json());

  return response;
};

export default Export;
