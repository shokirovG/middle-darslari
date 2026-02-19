import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {BuildOptions} from "./types/config";
import {buildDevServer} from "./buildDevServer";


export function buildWebpackConfig(options:BuildOptions):webpack.Configuration{
    const {paths, mode,port} = options;
    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(),
        output: {
        path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true
    },
        devServer: buildDevServer(options),
    plugins: buildPlugins(options),
}
    }
