require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const githubData = { "login": "Aditi-Singh1",
"id": 101592334,
"node_id": "U_kgDOBg4tDg",
"avatar_url": "https://avatars.githubusercontent.com/u/101592334?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/Aditi-Singh1",
"html_url": "https://github.com/Aditi-Singh1",
"followers_url": "https://api.github.com/users/Aditi-Singh1/followers",
"following_url": "https://api.github.com/users/Aditi-Singh1/following{/other_user}",
"gists_url": "https://api.github.com/users/Aditi-Singh1/gists{/gist_id}",
"starred_url": "https://api.github.com/users/Aditi-Singh1/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/Aditi-Singh1/subscriptions",
"organizations_url": "https://api.github.com/users/Aditi-Singh1/orgs",
"repos_url": "https://api.github.com/users/Aditi-Singh1/repos",
"events_url": "https://api.github.com/users/Aditi-Singh1/events{/privacy}",
"received_events_url": "https://api.github.com/users/Aditi-Singh1/received_events",
"type": "Users",
"user_view_type": "public",
"site_admin": false,
"name": "Aditi Singh_Create",
"company": null,
"blog": "",
"location": null,
"email": null,
"hireable": null,
"bio": "A Learner and solver",
"twitter_username": null,
"public_repos": 16,
"public_gists": 0,
"followers": 0,
"following": 0,
"created_at": "2022-03-14T18:04:20Z",
"updated_at": "2026-03-24T12:55:21Z"
}

app.get("/youtube", (req, res) => {
    res.send("<h1>Chai is good. Is it? Yes!!</h1>");
});

app.get("/github", (req,res) =>{
  res.json(githubData);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});