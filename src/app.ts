/*

*/

import express, { Request, Response } from 'express'

const app = express()

app.use(express.json())

app.get('/health', (req, res) => res.send('/health'))
app.get('/ab*cd', (req, res) => res.send('/ab*cd')) // /abcd, /abxcd, /abRANDOMcd
app.get('/abc|bcd/', (req, res) => res.send('/abc|bcd/')) // /abc, /bcd

app.listen(3000, () => console.log(`Server is listening on port 3000...`))
