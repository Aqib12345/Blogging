import express from 'express'
import bodyParser from 'body-parser'
const app = express()
const port = 3000

var postList = {
  name: 'Aqib Showkat',
  designation: 'Superintending Engineeer',
  company: 'Oil India Limited',
  companyLogoURL: 'https://oil-india.com/themes/oilindia/images/Newlogo.svg',
  posts: [],
}

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index.ejs', postList)
})

app.post('/createPost', (req, res) => {
  postList.posts.unshift(req.body['post-text-area'])
  res.render('index.ejs', postList)
})

app.delete('/post', (req, res) => {
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Server started successfully on port ${port}.`)
})
