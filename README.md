# Nuxt Logger

## Installation

1. install using `npm install @remindgmbh/nuxt-logger` or `yarn add @remindgmbh/nuxt-logger`

2. add module in nuxt.config.js

   ```javascript
   export default defineNuxtConfig({
       ...
       modules: [
           ...
           '@remindgmbh/nuxt-logger',
           ...
       ]
       ...
   })
   ```

## Configuration

Set log level in module options:

   ```javascript
   export default defineNuxtConfig({
       ...
       logger: {
           level: 2,
       },
       ...
   })
   ```

See available log levels [here](src/runtime/logLevel.ts).

## Usage

Call the auto imported composable `useLogger` to start using the logger.

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
