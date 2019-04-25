module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "privacy-policy": { page: "privacy-policy" },
      "terms-of-service": { page: "terms-of-service" },
      "/answers/fetus-embryo-not-baby": {
        page: "/post",
        query: { slug: "fetus-embryo-not-baby" },
      },
      "/answers/unborn-child-survives-mothers-death": {
        page: "/post",
        query: { slug: "unborn-child-survives-mothers-death" },
      },
      "/answers/dna-genetics-unborn-mother": {
        page: "/post",
        query: { slug: "dna-genetics-unborn-mother" },
      },
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
