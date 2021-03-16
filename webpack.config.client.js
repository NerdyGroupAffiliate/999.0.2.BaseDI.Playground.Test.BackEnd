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
    new webpack.IgnorePlugin(/external-editor/),
    new webpack.IgnorePlugin(/inquirer/),
    new webpack.IgnorePlugin(/forever-agent/),
    new webpack.IgnorePlugin(/tunnel-agent/),
    new webpack.IgnorePlugin(/instagram-private-api/),
    new webpack.IgnorePlugin(/request-promise/),
    new webpack.IgnorePlugin(/passport/),
    new webpack.IgnorePlugin(/passport-facebook/),
    new webpack.IgnorePlugin(/fs/),
    new webpack.IgnorePlugin(/curling/),
    new webpack.IgnorePlugin(/simple-oauth2/),
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
            APP_ENV: JSON.stringify("CLIENT"),
            APP_SETTING_CONVERSION_MODE: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_1_1_ADVERTISING_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_2_1_BLOGGING_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_2_2_PODCASTING_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_2_3_SOCIALMEDIA_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_2_4_ECOMMERCE_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_3_1_LISTBUILDING_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_4_1_PRODUCT_SUPPLEMENTS_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_4_2_PRODUCT_NUTRITION_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_5_1_PRODUCT_COACHING_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR            
            APP_SETTING_CONVERSION_MODE_5_2_PRODUCT_CONSULTING_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_5_3_PRODUCT_PERSONALTRAINING_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_6_1_PRODUCT_SOFTWARE_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_7_1_PRODUCT_AFFILIATEREVENUE_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_8_1_ACCOUNTING_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_9_1_CUSTOMERSERVICE_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_10_1_PRODUCTIVITY_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_11_1_RISKMANAGEMENT_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_12_1_CAREERSEMPLOYMENT_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_12_4_CMS_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_12_5_SECURITY_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_CONVERSION_MODE_12_6_MANAGEMENT_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
            APP_SETTING_DEVELOPER_MODE: JSON.stringify(true)
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