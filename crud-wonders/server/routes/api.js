const express = require('express')
const router = express.Router()

const wonders = [
    { name: "Mount Everest", location: "Nepal", visited: false },
    { name: "Grand Canyon", location: "Arizona", visited: false },
    { name: "Botanical Gardens", location: "Singapore", visited: true },
    { name: "Pantheon", location: "Greece", visited: false },
    { name: "Colosseum", location: "Italy", visited: true }
]


router.get('/wonders', function (req, res) {
    res.send(wonders)
})

router.post('/wonder', function (req, res) {//this is a path strictly for the post main.js query-post
    console.log("Someone's trying to make a post request")
    console.log(req.body)//req.body-receive the data from the post main.js
    wonders.push({...req.body,visited:false})//add to the array and adds the property "visited"
    res.send(wonders)//return the wonders full object from above-or respond end just to finish the cycle req-res
})


router.put('/wonder/:name', function (req, res) {
    console.log("About to update someone")
    let wonder = req.params.name
    wonders.find(w => w.name === wonder).visited = true
    console.log(wonder)
    res.end()// don't forget to end the cycle!
})

router.delete('/wonder/:name', function (req, res) {//מחק את הקוליסאום בלי לחיצה על עכבר
    let wonder = req.params.name
    let wondersIndex = wonders.findIndex(w => w.name === wonder)
    wonders.splice(wondersIndex, 1)
    res.end()
})
module.exports = router