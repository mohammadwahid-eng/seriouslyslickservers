const express = require('express')
const app = express()
app.set("port", process.env.PORT || 3000)
app.set('view engine', 'ejs');
app.use(express.static('public'))

const meta = {
    title: "VPS, Virtual servers, Unmanaged VPS, Dedicated Servers, Low Latency, IP leasing, Un-Managed - Managed Services OpenVZ, ZEN, KVM - UK"
}


app.get('/about-us', function(req, res) {
    meta.title = "About Us";
    res.render('pages/about-us', {data: meta})
})
app.get('/products/:slug', function(req, res) {
    meta.title = "Products";
    res.render('pages/products', {data: meta})
})
app.get('/blog', function(req, res) {
    meta.title = "Blog";
    res.render('pages/blog', {data: meta})
})
app.get('/services/:slug', function(req, res) {
    meta.title = "Services";
    res.render('pages/services', {data: meta})
})
app.get('/join-us', function(req, res) {
    meta.title = "Join Us";
    res.render('pages/join-us', {data: meta})
})
app.get('/faqs', function(req, res) {
    meta.title = "FAQs";
    res.render('pages/faqs', {data: meta})
})
app.get('/contact-us', function(req, res) {
    meta.title = "Contact Us";
    res.render('pages/contact-us', {data: meta})
})

app.get('/', function(req, res) {
    res.render('pages/index', {data: meta})
})

app.listen(app.get('port'), function() {
    console.log("Application running at http://localhost:" + app.get('port'))
})