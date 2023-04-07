import axios from "axios"


//  비동기

// function FetchPost () {
//   const result =axios.get("https://koreanjson.com/posts/1")
//   console.log(result) //promise {<pending>}
// }
// FetchPost()

// 동기

async function FetchPost2 () {
  const result = await axios.get("https://koreanjson.com/posts/1")
  console.log(result.data) //실제 데이터 


}
FetchPost2()