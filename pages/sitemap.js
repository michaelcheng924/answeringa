import { useEffect } from "react";
import _ from "lodash";
import fetch from "isomorphic-fetch";
import { each } from "lodash";

import { pages } from "./export";

let textareaRef;

const Sitemap = ({ sitemap }) => {
  useEffect(() => {
    textareaRef.select();
  });

  return (
    <div>
      {sitemap.match(/<url>/g).length}
      <textarea
        ref={textarea => (textareaRef = textarea)}
        style={{ width: "100%", height: "100vh" }}
        defaultValue={sitemap}
      />
    </div>
  );
};

const date = new Date().toISOString();

Sitemap.getInitialProps = async ({ res, req }) => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>

  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>https://answeringabortion.com</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;

  each(pages, page => {
    sitemap += `<url>
    <loc>https://answeringabortion.com${page}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  const response = await fetch(
    "https://public-api.wordpress.com/rest/v1.1/sites/answeringabortion.wordpress.com/posts/"
  ).then(r => r.json());

  response.posts.forEach(item => {
    let urlPrefix = ``;

    if (_.get(item, "tags.answers", "")) {
      urlPrefix = "/answers/";
    }

    sitemap += `<url>
    <loc>https://answeringabortion.com${urlPrefix}${item.slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  sitemap += `</urlset>`;

  return { sitemap };
};

export default Sitemap;
