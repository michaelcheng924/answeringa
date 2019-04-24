module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "privacy-policy": { page: "privacy-policy" },
      "terms-of-service": { page: "terms-of-service" },
      "/answers/science-life-conception": {
        page: "/post",
        query: { slug: "science-life-conception" },
      },
      "/answers/pro-abortion-life-begins-conception": {
        page: "/post",
        query: { slug: "pro-abortion-life-begins-conception" },
      },
      "/answers/life-at-conception": {
        page: "/post",
        query: { slug: "life-at-conception" },
      },
    };
  },
};
