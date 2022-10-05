import { useRuntimeConfig } from '#app'
import { LogLevel } from './logLevel'

export function useLogger() {
    const config = useRuntimeConfig()

    const logFunctions: Record<LogLevel, 'debug' | 'error' | 'info' | 'warn'> =
        {
            [LogLevel.Debug]: 'debug',
            [LogLevel.Error]: 'error',
            [LogLevel.Info]: 'info',
            [LogLevel.Warn]: 'warn',
        }

    function debug(message?: any, ...optionalParams: any[]) {
        log(LogLevel.Debug, message, ...optionalParams)
    }

    function error(message?: any, ...optionalParams: any[]) {
        log(LogLevel.Error, message, ...optionalParams)
    }

    function info(message?: any, ...optionalParams: any[]) {
        log(LogLevel.Info, message, ...optionalParams)
    }

    function warn(message?: any, ...optionalParams: any[]) {
        log(LogLevel.Warn, message, ...optionalParams)
    }

    function log(level: LogLevel, message?: any, ...optionalParams: any[]) {
        if (config.public.logger.level >= level) {
            // eslint-disable-next-line no-console
            console[logFunctions[level]](message, ...optionalParams)
        }
    }

    return { debug, error, info, warn }
}
