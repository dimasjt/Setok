const { environment } = require("@rails/webpacker")

environment.loaders.append("graphql", {
  test: /\.(gql|grapql)$/,
  exclude: /node_modules/,
  loader: "graphql-tag/loader",
})

module.exports = environment
