const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (module.exports = (phase) => {
  const database =
    phase === PHASE_DEVELOPMENT_SERVER ? "contact-form-dev" : "contact-form";
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "admin",
      mongodb_password: "passwordasdfasdfasd",
      mongodb_clustername: "cluster0",
      mongodb_database: database,
    },
  };
});
