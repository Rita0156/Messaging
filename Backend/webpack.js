const nodeExternals = require('webpack-node-externals');
const path = require("path")

module.exports = {
  target: "node",
  mode: "production",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      path: require.resolve("path-browserify"),
      util: require.resolve("util/"),
      assert: require.resolve("assert/"),
      https: require.resolve("https-browserify"),
      http: require.resolve("stream-http"),
      buffer: require.resolve("buffer/"),
      url: require.resolve("url/"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      zlib: require.resolve("browserify-zlib"),
      os: require.resolve("os-browserify/browser"),
      constants: require.resolve("constants-browserify"),
      timers: require.resolve("timers-browserify"),
      process: require.resolve("process/browser"),
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "lib"),
  },
  externals: [nodeExternals()],
};