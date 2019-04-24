module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
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
