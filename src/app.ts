/*

*/

import express, { Request, Response, NextFunction } from 'express'
const app = express()
app.use(express.json())

const handleGetBookOne = (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore: ignore typescript check for the next line
  req.name = 'John'
  next()
}
const handleGetBookTwo = (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  console.log(req.name)
  res.send(req.params)
}

app.get('/books/:bookID', [handleGetBookOne, handleGetBookTwo])

// (***) we can also write like this > but it looks like a mess
app.get(
  '/books/:bookID/:authorID',
  (req: Request, res: Response, next: NextFunction) => {
    console.log('First Middleware')
    next()
  },
  (req: Request, res: Response, next: NextFunction) => {
    console.log('Second Middleware')
    res.send(req.params)
  }
)

app.listen(3000, () => console.log(`Server is listening on port 3000...`))
