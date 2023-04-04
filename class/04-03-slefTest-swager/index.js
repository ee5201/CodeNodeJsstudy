import express from "express"
import swaggerUi from "swagger-ui-express"
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "../04-03-rest-api-with-express-swager/swagger/config.js";



const app = express()
app.use(express.json(options))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc()));

app.get('/boards',(req,res) => {
  const result = [
    {number:1 , writer:"철수",title:"제목입니다.",contents:"내용이에요",Phone:"01012345678"},
    {number:2 , writer:"훈수",title:"훈제목입니다.",contents:"훈내용이에요",Phone:"01012345278"},
    {number:3 , writer:"김수",title:"김제목입니다.",contents:"김내용이에요",Phone:"01012345378"}

  ]
  res.send(result)

} )  

app.post('boards', (req,res)=>{
  console.log(req.body)

  res.send("게시물 등록이 완료되었습니다.")
})

app.post('/token/phone',(req,res)=>{
  const myphone = req.body.aaa

  const isValid = checkVaild(myphone);
  if(isValid){
    const mytoken = getToken();

    sendTokenToSMS(myphone,mytoken);
    res.send("인증완료!!")
  }
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})
