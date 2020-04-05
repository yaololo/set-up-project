const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  // webpack will take the files from ./src/index
  entry: ["@babel/polyfill", "./src/index.tsx"],

  // entry: {
  //   bundle: "./index.tsx"
  // },

  // and output it into /dist as bundle.js

  // output: {
  //   // `filename` provides a template for naming your bundles (remember to use `[name]`)
  //   filename: "[name].bundle.js",
  //   // `chunkFilename` provides a template for naming code-split bundles (optional)
  //   chunkFilename: "[name].bundle.js",
  //   // `path` is the folder where Webpack will place your bundles
  //   path: path.join(__dirname, "/dist"),
  //   // `publicPath` is where Webpack will load your bundles from (optional)
  //   publicPath: "dist/"
  // },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      image: path.resolve(__dirname, "src/assets/image"),
      svg: path.resolve(__dirname, "src/assets/svg"),
      "@": path.resolve(__dirname, "src")
    }
  },
  // context: path.resolve(__dirname, "src"),
  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devtool: "inline-source-map", // debugging
  devServer: {
    // contentBase: path.resolve(__dirname, "dist"),
    // publicPath: "/",
    // headers: {
    //   "Service-Worker-Allowed": "/"
    // },
    historyApiFallback: {
      rewrites: [
        {
          from: /^\/$/,
          to: "/index.html"
        },
        {
          from: /./,
          to: "/index.html"
        }
      ]
    },
    // inline: true,
    // watchOptions: {
    //   watch: true
    // },
    // disableHostCheck: true,
    // compress: true,
    hot: true,
    // contentBase: resolve(__dirname, "dist"),
    publicPath: "/",
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
        xfwd: false
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
