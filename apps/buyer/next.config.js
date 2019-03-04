const withTM = require('next-transpile-modules')

module.exports = withTM({
  transpileModules: ['@company/components', '@company/shared']
})
