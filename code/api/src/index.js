// gets errything started it looks like? all of the modules, graphql, setup uploads, start server
// not sure when this executes (when the server is started?)

// Imports
import express from 'express'

// App Imports
import setupLoadModules from './setup/load-modules'
import setupGraphQL from './setup/graphql'
import setupUpload from './setup/upload'
import setupStartServer from './setup/start-server'

// Create express server
const server = express()

// Setup load modules
setupLoadModules(server)

// Setup uploads
setupUpload(server)

// Setup GraphQL
setupGraphQL(server)

// Start server
setupStartServer(server)
