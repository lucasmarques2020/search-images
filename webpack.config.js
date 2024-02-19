const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        home: './src/main.js',
    },
    output: {
        path: path.join(__dirname + "/public/assets/"),
        filename: '[name].min.js',
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                options: {
                    "presets": ["@babel/preset-env"]
                }
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            '...',
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].min.css",
        }),
    ],
};
