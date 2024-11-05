const path = require("path");

module.exports = {
  entry: "./src/index.js", // Adjust the entry point as needed
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
