'use strict'

const fp = require('fastify-plugin')
const path = require('node:path')

module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, '../public'),
    prefix: '/public/'
  })
})
