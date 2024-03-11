require('dotenv').config()

const express = require('express')
const app = express()
// here app is like if we can use math.pi,math.round like that there is number of functions
const port = 3000

const githubData = {

  "login": "srinivasulu-2654",
  "id": 83912661,
  "node_id": "MDQ6VXNlcjgzOTEyNjYx",
  "avatar_url": "https://avatars.githubusercontent.com/u/83912661?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/srinivasulu-2654",
  "html_url": "https://github.com/srinivasulu-2654",
  "followers_url": "https://api.github.com/users/srinivasulu-2654/followers",
  "following_url": "https://api.github.com/users/srinivasulu-2654/following{/other_user}",
  "gists_url": "https://api.github.com/users/srinivasulu-2654/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/srinivasulu-2654/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/srinivasulu-2654/subscriptions",
  "organizations_url": "https://api.github.com/users/srinivasulu-2654/orgs",
  "repos_url": "https://api.github.com/users/srinivasulu-2654/repos",
  "events_url": "https://api.github.com/users/srinivasulu-2654/events{/privacy}",
  "received_events_url": "https://api.github.com/users/srinivasulu-2654/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 23,
  "public_gists": 0,
  "followers": 2,
  "following": 11,
  "created_at": "2021-05-09T13:54:47Z",
  "updated_at": "2024-03-11T07:08:56Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send('Sreenudotcom')
})

app.get('/login',(req,res) => {
    res.send('<h1>Login karo code chai</h1>')
})

 app.get('/youtube',(req,res) => {
    res.send('<h2>Chai aur code</h2>')
 })


 app.get('/github',(req,res) => {
     res.json(githubData)
 })
  
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})