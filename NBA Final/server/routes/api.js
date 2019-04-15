const express = require('express')
const router = express.Router()
const req = require('request')
const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}
let teamArr = []

router.put(`/team/`, function(request, response){
    let teams = request.body
    let keys = Object.keys(teams)
    for(let team of keys){
        teamToIDs[team] = teams[team]
    }
    response.send(teamToIDs)
})

router.get(`/teams/:teamName`, function (request, response) {
    teamArr = []
    let team = request.params.teamName
    let teamID = teamToIDs[team]
    if (teamID != undefined) {
        req('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, result) {
            console.log(team, teamID)
            let body = JSON.parse(result.body)
            createTeam(body.league.standard, teamID)
            console.log(teamArr)
            response.send(teamArr)
        })
    }
})
const createTeam = function(players, teamID){
    for (let p of players) {
        if (p.teamId == teamID && p.isActive == true) {
            let p1 = {
                fName: p.firstName,
                lName: p.lastName,
                jersey: p.jersey,
                pos: p.pos
            }
            teamArr.push(p1)
        }
    }
}

module.exports = router