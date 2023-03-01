/*

*/

import express, { Request, Response } from 'express'

const app = express()

app.use(express.json())

app.get('/books/:bookID', (req, res) => {
  console.log(req.params.bookID)
  res.json(req.params)
})

app.get('/books/:bookID/:authorID', (req, res) => {
  res.json(req.params)
})

app.listen(3000, () => console.log(`Server is listening on port 3000...`))
