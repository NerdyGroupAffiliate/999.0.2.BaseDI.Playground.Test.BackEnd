const path = require('path');
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
const nodeExternals = require('webpack-node-externals');
const webpack = require("webpack");
const NodemonPlugin = require('nodemon-webpack-plugin');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// Add babel polyfill
const Promise = require('es6-promise').Promise;
//entry.unshift("@babel/polyfill");

const nodeWhiteList = {
    whitelist: [
        /\.(eot|woff|woff2|ttf|otf)$/,
        /\.(svg|png|jpg|jpeg|gif|ico)$/,
        /\.(mp4|mp3|ogg|swf|webp)$/,
        /\.(css|scss|sass|sss|less)$/,
        'jquery', /^lodash/, 'object-scan',
        'typescript-collections', 'assert', 'assert-plus',
        'object-assign', 'util/', 'util.promisify', 'utila', 'util-deprecate',
        'es6-promise-promise', 'es6-promise', 'inherits', 'path'
    ]
};

let exclude = [path.resolve(__dirname, "wwwroot")];
  
const plugins = [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new NodemonPlugin({ ext: 'js,ts,json,hbs,html', nodeArgs: ['--inspect'] }),
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
            APP_ENV: JSON.stringify("SERVER"),
            BASEDI_ASSETS_PATH: "../000.BaseDI.Assets"
           
        }
    })
    //new CopyWebpackPlugin([
    //    {
    //        from: "./build/static",
    //        to: "static/"
    //    }
    //])
];

module.exports = {
    entry: './Startup.ts',
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "wwwroot", "Server", "JS"),
        //libraryTarget: 'var',
        library: 'Server',
        filename:"Startup.js"
    },
    target: "node",
    resolve: {
        modules: ["node_modules"],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader", 
                options: {
                    configFile: path.resolve(__dirname, "tsconfig.server.json")
                }
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader", exclude },
            {
                test: cssRegex,
                exclude: cssModuleRegex,
                loaders: "null-loader"
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
                ]
            },
            {
                test: /\.jsx?$/,
                loaders: "babel-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|otf)$/,
                loader: "url-loader",
                options: {
                    emitFile: false,
                    limit: 10000,
                    name: "static/media/[name].[hash:8].[ext]"
                }
            }       
        ]
    },
    devServer: {
        contentBase: "wwwroot/"
    },
    plugins,
    externals: [nodeExternals()]
};