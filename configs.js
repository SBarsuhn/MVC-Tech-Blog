export default {
  handlebarsConfig: {
    dirStructure: [
      "config",
      "controllers",
      "models",
      "public/js",
      "public/css",
      "views/layouts",
      "views/partials",
    ],
    files: [
      "config/connection.js",
      "controllers/index.js",
      "models/index.js",
      "views/layouts/main.handlebars",
      ".env",
      "server.js",
    ],
  },
};
