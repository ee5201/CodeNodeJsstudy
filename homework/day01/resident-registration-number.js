function Resident (Number) {
    const result = String(Number).padStart(6,"0")
    
    if(result.includes("-") === false){
      console.log("에러 발생!!! 형식이 올바르지 않습니다!!!")
      return
    }
    console.log(result.start)
  
}
Resident("210510-1123041")