module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/answers/life-at-conception": {
        page: "/post",
        query: { slug: "life-at-conception" }
      }
    };
  }
};
