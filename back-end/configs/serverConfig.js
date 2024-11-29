/**
 * @file        serverConfig
 * @description Server configuration    
 * @module      Core
 * @module      Core
 * @access      Public
 * @version     1.0.0
 * @author      Hanood Tunio <hanood.tunio@gmail.com>
 */


const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const http = require('http')
const path = require('path')

const app = express()


// Apply middlewares
app.use(cors(require('./corsCofig')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "static"))); // Serve static files from "static" directory

// Apply routes files


// export server object.xx
module.exports = app;