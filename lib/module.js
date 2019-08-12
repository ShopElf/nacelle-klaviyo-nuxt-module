const path = require('path')

module.exports = function (moduleOptions) {
  const filename = 'nacelle-klaviyo-plugin.js'
  const options = {
    ...this.options.nacelle,
    ...moduleOptions
  }

  this.options.head.script.push({
    src: '//static.klaviyo.com/onsite/js/klaviyo.js?company_id=' + options.klaviyo,
    defer: true
  })

  this.addPlugin({
    src: path.resolve(__dirname, filename),
    filename,
    options
  })
}

module.exports.meta = require('../package.json')
