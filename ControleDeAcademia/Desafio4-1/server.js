const nunjucks = require('nunjucks')
const express = require('express')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res){    
    return res.render('teachers')
})

server.get('/students', function(req, res){
    return res.render('students')
})

server.listen(5000, function(){
    console.log('server is running')
})