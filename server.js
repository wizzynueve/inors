/**
 * Module dependencies
 */
const express = require('express')
const passport = require('passport')
// const db = require('./config/db')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const cookieParser = require('cookie-parser')
const app = express()
const port = process.env.PORT || 3000