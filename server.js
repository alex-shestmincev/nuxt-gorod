const Nuxt = require('nuxt')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = require('express')()

const categoriesData = require('./assets/data/categories.json')

// Body parser, to access req.body
app.use(bodyParser.json())

// Sessions to create req.session
app.use(session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}))

// POST /api/login to log in the user and add him to the req.session.authUser
app.post('/api/login', function (req, res) {
    if (req.body.username === 'demo' && req.body.password === 'demo') {
        req.session.authUser = { username: 'demo' }
        return res.json({ username: 'demo' })
    }
    res.status(401).json({ error: 'Bad credentials' })
})

// POST /api/logout to log out the user and remove it from the req.session
app.post('/api/logout', function (req, res) {
    delete req.session.authUser
    res.json({ ok: true })
})

app.get('/api/category', (req, res) => {
  res.json(categoriesData);
})

// We instantiate Nuxt.js with the options
const isProd = process.env.NODE_ENV === 'production'
let config = require('./nuxt.config.js')
config.dev = !isProd
const nuxt = new Nuxt(config)
// No build in production
const promise = (isProd ? Promise.resolve() : nuxt.build())
promise.then(() => {
    app.use(nuxt.render)
    app.listen(5005)
    console.log('Server is listening on http://localhost:5005')  // eslint-disable-line no-console
})
    .catch((error) => {
        console.error(error)  // eslint-disable-line no-console
        process.exit(1)
    })
