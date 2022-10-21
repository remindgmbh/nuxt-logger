import { addImports, createResolver, defineNuxtModule } from '@nuxt/kit'
import { defu } from 'defu'
import { name, version } from '../package.json'
import { LogLevel } from './runtime/logLevel'

export interface ModuleOptions {
    level: LogLevel
}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name,
        version,
        configKey: 'logger',
    },
    defaults: {
        level: LogLevel.Warn,
    },
    setup(options, nuxt) {
        const resolver = createResolver(import.meta.url)

        nuxt.options.runtimeConfig.public.logger = defu(
            nuxt.options.runtimeConfig.public.logger,
            options
        )

        nuxt.options.alias['#nuxt-logger'] = resolver.resolve('runtime')

        addImports({
            from: resolver.resolve('runtime/useLogger'),
            name: 'useLogger',
        })
    },
})
