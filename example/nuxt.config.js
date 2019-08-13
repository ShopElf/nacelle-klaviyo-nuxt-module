const { resolve } = require('path')
module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    '@nacelle/nacelle-nuxt-module',
    { handler: require('../') }
  ],
  nacelle: {
    endpoint: 'https://getnacelle.com',
    token: 'abc123',
    klaviyo: {
      companyId: '',
      defaultListId: '',
      defaultEmbedCode: ''
    }
  },
  build: {
    transpile: ['@nacelle/nacelle-vue-components']
  }
}
