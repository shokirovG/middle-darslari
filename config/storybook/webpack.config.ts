import webpack from "webpack";

import {BuildPaths} from "../build/types/config";
import path from "path";
import {buildCssLoader} from "../build/loaders/buildCssLoader";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



export default ({config}: {config: webpack.Configuration}) => {
        const paths: BuildPaths = {
            entry: '',
            html: '',
            build: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
        }
        config.resolve.modules.push(paths.src)
        config.resolve.extensions.push('.ts', '.js')
        config.module.rules.push(buildCssLoader(true))

    return config;
}