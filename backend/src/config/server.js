const port = 4004
    , bodyParser = require('body-parser')
    , express = require('express')
    , server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, () => {
    console.log(`Backend on port: ${port}`)
})