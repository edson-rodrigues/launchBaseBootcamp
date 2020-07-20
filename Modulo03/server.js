const express = require('express')
const nunjucks = require('nunjucks')

const videos = require("./data")

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res){
    const about = {
        avatarUrl: "https://avatars3.githubusercontent.com/u/25504855?s=460&u=ce6cdec6bddfc05f8d6fd3681eca587b210f962d&v=4",
        name: "Edson Rodrigues",
        role: "WebDev - Freelancer - Software Engineer",
        description: "Desenvolvedor web fullstack buscando criar os melhores softwares e soluções que melhorem a vida de todos",
        links: [
        {name: "Github", url: "https://github.com/edson-rodrigues"},
        {name: "Twitter", url: "https://twitter.com/mechamadeed"},
        {name: "LinkedIn", url: "https://www.linkedin.com/in/edson-rodrigues-4b0713a9/"}
        ]
        }
    return res.render('about', {about})  
})

server.get('/portfolio', function(req, res){
    return res.render('portfolio', {items: videos})  
})

server.get('/video', function(req, res){
    const id = req.query.id
    const video = videos.find(function(video){
    return video.id == id
    })

    if(!video){
        return res.send("Video not found!")
    }       
   
    return res.render('video', { item: video })
})

server.listen(5000, function(){
    console.log('server is running')
})