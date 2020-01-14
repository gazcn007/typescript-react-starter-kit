const path = require("path");
module.exports = {
  components: "src/components/**/*.tsx",
  propsParser: require("react-docgen-typescript").parse
};