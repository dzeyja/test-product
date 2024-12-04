import {Configuration as DevServerConfiguration} from 'webpack-dev-server'
import { BuildOptions } from './types/config'

export function buildDevServer({port}: BuildOptions): DevServerConfiguration {
    return {
        open: true,
        historyApiFallback: true,
        port: port,
        hot: true
    }
}