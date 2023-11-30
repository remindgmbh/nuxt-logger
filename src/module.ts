import { addImportsDir, createResolver, defineNuxtModule } from '@nuxt/kit'
import { defu } from 'defu'
import { name, version } from '../package.json'
import { LogLevel } from './runtime/model'

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
            options,
        )

        nuxt.options.alias['#nuxt-logger'] = resolver.resolve('runtime')

        addImportsDir(resolver.resolve('runtime/composables/**/*'))
    },
})
