const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')

const app = express()
const port = 5000


app.use(express.static('public'))

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))