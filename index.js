require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT  

const githubData={
    "login": "Coderx8972",
    "id": 204830587,
    "node_id": "U_kgDODDV3ew",
    "avatar_url": "https://avatars.githubusercontent.com/u/204830587?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Coderx8972",
    "html_url": "https://github.com/Coderx8972",
    "followers_url": "https://api.github.com/users/Coderx8972/followers",
    "following_url": "https://api.github.com/users/Coderx8972/following{/other_user}",
    "gists_url": "https://api.github.com/users/Coderx8972/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Coderx8972/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Coderx8972/subscriptions",
    "organizations_url": "https://api.github.com/users/Coderx8972/orgs",
    "repos_url": "https://api.github.com/users/Coderx8972/repos",
    "events_url": "https://api.github.com/users/Coderx8972/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Coderx8972/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2025-03-25T06:28:35Z",
    "updated_at": "2025-04-18T13:14:39Z"
  }
app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.get('/login',(req,res)=>{
    res.send(`<h1>LOGIN TO MY WEBSITE</h1>`)
})
app.get('/signup',(req,res)=>{
    res.send("<h2>SIGN UP TO MY WEBSITE</h2>")
})
app.listen(port,()=>console.log(`Sever starts at ${port}`))
