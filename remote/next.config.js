// next.config.js
const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

module.exports = withFederatedSidecar({
  name: "shell",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./Button": "./components/Button.js",
  },
  shared: {
    react: {
      // Notice shared are NOT eager here.
      requiredVersion: false,
      singleton: true,
    },
  },
})({
  // your original next.config.js export
});