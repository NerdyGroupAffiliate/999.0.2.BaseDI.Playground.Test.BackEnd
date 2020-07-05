const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require("webpack");
const NodemonPlugin = require('nodemon-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

const Promise = require('es6-promise').Promise;

//let exclude = [path.resolve(__dirname, "wwwroot")];
//console.log(exclude);

const plugins = [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.IgnorePlugin(/express/),
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
            APP_ENV: JSON.stringify("CLIENT")
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
    entry: './BaseDI_1_0.tsx',
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "wwwroot", "Client", "JS"),
        libraryTarget: 'var',
        library: 'Client',
        filename: "BaseDI_1_0.js"
    },
    target: "web",
    mode: "development",
    resolve: {
        modules: ["node_modules"],
        extensions: [".tsx", ".ts", ".jsx", ".js"]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        http: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.(ts)x?$/,
                loader: "ts-loader",
                options: {
                    configFile: "tsconfig.json"
                }
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
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
            }]
    },
    devServer: {
        contentBase: "wwwroot/Distribution/Client/JS"
    },
    plugins
};