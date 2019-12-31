const path = require('path')
const { readdirSync } = require('fs')

module.exports = function (moduleOptions) {
  const filename = 'nacelle-klaviyo-plugin.js'
  const options = {
    ...this.options.nacelle,
    ...moduleOptions
  }

  // Add Klaviyo script
  this.options.head.script.push({
    src: '//static.klaviyo.com/onsite/js/klaviyo.js?company_id=' + options.klaviyo.companyId,
    defer: true
  })

  // Add Klaviyo script for legacy forms
  this.options.head.script.push({
    src: '//www.klaviyo.com/media/js/public/klaviyo_subscribe.js',
    defer: true
  })

  // Copy components
  const componentsDir = path.resolve(__dirname, 'components')

  for (const file of readdirSync(componentsDir)) {
    this.addTemplate({
      src: path.resolve(__dirname, './components', file),
      fileName: path.join('nacelle', 'integrations', file)
    })
  }

  // Add plugin to nuxt
  this.addPlugin({
    src: path.resolve(__dirname, filename),
    fileName: filename,
    options
  })
}

module.exports.meta = require('../package.json')
