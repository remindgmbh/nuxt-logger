import { addImportsDir, createResolver, defineNuxtModule } from '@nuxt/kit'
import { name, version } from '../package.json'
import { LogLevel } from './runtime/model'
import { defu } from 'defu'

export interface ModuleOptions {
    level: LogLevel
}

export default defineNuxtModule<ModuleOptions>({
    defaults: {
        level: LogLevel.Warn,
    },
    meta: {
        configKey: 'logger',
        name,
        version,
    },
    setup(options, nuxt) {
        const resolver = createResolver(import.meta.url)

        nuxt.options.runtimeConfig.public.logger = defu(
            nuxt.options.runtimeConfig.public.logger,
            options,
        )

        nuxt.options.alias['#nuxt-logger'] = resolver.resolve('runtime')

        addImportsDir(resolver.resolve('runtime/composables/**/*'))
    },
})
