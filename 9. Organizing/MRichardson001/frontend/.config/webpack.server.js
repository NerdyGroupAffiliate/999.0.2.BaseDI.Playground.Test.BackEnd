const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const StartServerPlugin = require("start-server-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
const mode = process.env.NODE_ENV;
const isDev = mode === "development";
const hotResolve = "webpack/hot/poll?1000";

const entry = ["./server/server"];
isDev && entry.unshift(hotResolve);

// Add babel polyfill
const Promise = require('es6-promise').Promise;
entry.unshift("@babel/polyfill");

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

const externalsOptions = isDev
  ? {
      whitelist: [
        hotResolve,
        /\.(eot|woff|woff2|ttf|otf)$/,
        /\.(svg|png|jpg|jpeg|gif|ico)$/,
        /\.(mp4|mp3|ogg|swf|webp)$/,
        /\.(css|scss|sass|sss|less)$/
      ]
    }
  : {};

const plugins = [
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.ProvidePlugin({
      Promise: 'es6-promise-promise',
      $: 'jquery',
      jQuery: 'jquery',
      _: 'lodash'
  }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      PORT: JSON.stringify(process.env.PORT),
      SERVER_BUILD_VERSION: JSON.stringify(process.env.SERVER_BUILD_VERSION),
      GRAPHQL_SERVER_URL: JSON.stringify(process.env.GRAPHQL_SERVER_URL),
      BLOB_STORAGE_URL: JSON.stringify(process.env.BLOB_STORAGE_URL)
    }
  }),
  new CopyWebpackPlugin([
    {
      from: "./build/static",
      to: "static/"
    }
  ])
];
isDev &&
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new StartServerPlugin("index.js")
  );

const optimization = isDev
  ? undefined
  : {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8
            },
            compress: {
              ecma: 6,
              warnings: false,
              comparisons: false,
              inline: 2
            },
            output: {
              ecma: 6,
              comments: false,
              ascii_only: true
            }
          },
          parallel: true,
          cache: true,
          sourceMap: true
        })
      ]
    };

module.exports = {
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  ...(isDev ? { devtool: "source-map" } : {}),
  bail: true,
  mode,
  entry,
  optimization,
  ...(isDev
    ? {
        devServer: {
          contentBase: "./src",
          hot: true
        }
      }
    : {}),
  output: {
    publicPath: "./",
    path: path.resolve("./dist/server"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  target: "node",
  externals: [nodeExternals(externalsOptions)],
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300
  },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|otf)$/,
        loader: "url-loader",
        options: {
          emitFile: false,
          limit: 10000,
          name: "static/media/[name].[hash:8].[ext]"
        }
      },
      {
        test: cssModuleRegex,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              getLocalIdent: getCSSModuleLocalIdent,
              exportOnlyLocals: true
            }
          }

          // {
          //   // Options for PostCSS as we reference these options twice
          //   // Adds vendor prefixing based on your specified browser support in
          //   // package.json
          //   loader: require.resolve("postcss-loader"),
          //   options: {
          //     // Necessary for external CSS imports to work
          //     // https://github.com/facebook/create-react-app/issues/2677
          //     ident: "postcss",
          //     plugins: () => [
          //       require("postcss-flexbugs-fixes"),
          //       require("postcss-preset-env")({
          //         autoprefixer: {
          //           flexbox: "no-2009"
          //         },
          //         stage: 3
          //       }),
          //       // Adds PostCSS Normalize as the reset css with default options,
          //       // so that it honors browserslist config in package.json
          //       // which in turn let's users customize the target behavior as per their needs.
          //       postcssNormalize()
          //     ],
          //     sourceMap: false,
          //   }
          // }
        ]
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        loaders: "null-loader"
      },
      {
        test: /\.jsx?$/,
        loaders: "babel-loader"
      },
      {
        test: /\.graphql?$/,
        loader: 'webpack-graphql-loader'
      }
    ]
  },
  plugins
};
