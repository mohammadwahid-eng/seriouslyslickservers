const express = require('express')
const app = express()
app.set("port", process.env.PORT || 3000)
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/about-us', function(req, res) {
    res.render('pages/common')
})
app.get('/products/:slug', function(req, res) {
    res.render('pages/common')
})
app.get('/blog', function(req, res) {
    res.render('pages/common')
})
app.get('/services/:slug', function(req, res) {
    res.render('pages/common')
})
app.get('/join-us', function(req, res) {
    res.render('pages/common')
})
app.get('/faq', function(req, res) {
    res.render('pages/common')
})
app.get('/contact-us', function(req, res) {
    res.render('pages/common')
})

app.get('/', function(req, res) {
    res.render('pages/index')
})

app.listen(app.get('port'), function() {
    console.log("Application running at http://localhost:" + app.get('port'))
})