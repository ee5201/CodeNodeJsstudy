import express from "express";

const app = express()

//상품 구매하기 
app.post("/products/buy",(req,res) =>{
  // 1. 가진 돈을 검증하는 코드 (10줄 정도 작성)
  // ..
  // ..
  // ..
  // ..
  
  // 2.판매 여부 검증하는 코드 ( 대략 10줄 정도)
  // ..
  // ..
  // ..
  // ..


  // 3. 상품 구매하는 코드 
  // if(돈이 있음 && !판매완료){
    // res.send("상품 구매완료 ")
    //}
  



  res.send("상품 구매 완료!!!")
})


//상품 환불하기
app.post("/products/refund",(req,res) =>{
    // 2.판매 여부 검증하는 코드 ( 대략 10줄 정도)
    // ..
    // ..
    // ..
    // ..

    // 2. 상품 환불하는 코드 
    // if (판매완료) {
    // res.sned("상품 환불 완료")
    // }



  res.send("상품 환불 완료!!!")
})


app.listen(3000)