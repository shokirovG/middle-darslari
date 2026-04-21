import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";
import {buildCssLoader} from "./loaders/buildCssLoader";
export function buildLoaders(options: BuildOptions):webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }
    const babelLoader = {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ["i18next-extract",
                        {
                            locales: ["en",'ru'],
                            keyDefaultValue: true
                        }
                    ],

                ]

            },

        }
    }

    const typeScriptLoader = {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
        }

    const cssLoader = buildCssLoader(options.isDev)

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

       return [
        fileLoader,
        svgLoader,
           babelLoader,
        typeScriptLoader,
           cssLoader,
    ]
}