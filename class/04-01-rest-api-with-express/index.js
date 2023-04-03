import express from "express"

const app = express()


app.get('/', (req, res) => {
  res.send('helloMAN')
})


app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})

//listen : 접속을 기다린다. 