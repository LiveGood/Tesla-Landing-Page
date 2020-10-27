const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/deyan/Dev-projects/gatsby-tesla-test/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/deyan/Dev-projects/gatsby-tesla-test/src/pages/404.js"))),
  "component---src-pages-images-test-js": hot(preferDefault(require("/home/deyan/Dev-projects/gatsby-tesla-test/src/pages/imagesTest.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/deyan/Dev-projects/gatsby-tesla-test/src/pages/index.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/home/deyan/Dev-projects/gatsby-tesla-test/src/pages/using-typescript.tsx")))
}

