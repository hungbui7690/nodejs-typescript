/*

*/

import express, { Request, Response, NextFunction } from 'express'
const app = express()
app.use(express.json())

// (1)
const handleGetBookOne = (req: Request, res: Response, next: NextFunction) => {
  console.log('First Middleware')
  next() // (***) must have
}
const handleGetBookTwo = (req: Request, res: Response, next: NextFunction) => {
  console.log('Second Middleware')
  res.send(req.params)
}

// (2)
app.get('/books/:bookID', [handleGetBookOne, handleGetBookTwo])

app.listen(3000, () => console.log(`Server is listening on port 3000...`))
