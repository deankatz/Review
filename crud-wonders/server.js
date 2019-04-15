const api = require('./server/routes/api')
const express = require('express')
const path = require('path')

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', api)//הפעיל את האפי בשורה הראשונה לפני זה לא היה מוגדר, מה שזה עושה זה קולבק 
//כל פעם שמישהו קורא מבקש בקשה בקליינט הוא מופנה לאפי שמנהל את הבקשה

const port = 1337 //because why not// how to request "node server.js" on port 1337 and not 3000 ?
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})

