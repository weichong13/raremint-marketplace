const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `
      @import "./styles/config/_variables.scss";
      @import "./styles/config/_mixins.scss";
    `,
  },
};
