'use strict'

const events = require('./events.js')
// const api = require('./api.js')
// const indexUploads = require('./templates/index-uploads.handlebars')
// const indexSOneShots = require('./templates/index-s-oneShots.handlebars')
// const store = require('./store.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // api.indexExamples()
  //   .then(() => console.log('example index success'))
  //   .catch(() => console.log('example index failed'))
  // api.indexOneShots()
  //   .then((responseData) => {
  //     $('#s-handlebar-oneShots').html(indexSOneShots({ oneShots: responseData.oneShots.reverse() }))
  //     return responseData
  //   })
  //   .then((responseData) => {
  //     store.oneShots = responseData.oneShots
  //     return responseData
  //   })
  // api.indexUploads()
  //   .then((responseData) => {
  //     $('#handlebar-uploads').html(indexUploads({ uploads: responseData.uploads.reverse() }))
  //     return responseData
  //   })
  //   .then((responseData) => {
  //     store.uploads = responseData.uploads
  //     return responseData
  //   })
  //   .then(() => console.log('store.uploads', store.uploads))
  //   .catch(console.log)
  events.addHandlers()
})
