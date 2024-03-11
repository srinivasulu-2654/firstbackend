require('dotenv').config()

const express = require('express')
const app = express()
// here app is like if we can use math.pi,math.round like that there is number of functions
const port = 3000

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

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})