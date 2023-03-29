import { getToday } from "./utils.js"

export  function CheckValidationEmail (email) {
if(email === undefined || !email.includes("@")){
  console.log("에러발생")
  return false
}else{
  return true
}
}

export function getWelcomeTemplate (user) {
  return`
    <html>
        <body>
            <h1> ${user.name}님 가입을 환영합니다.</h1>
            <hr/>
            <div>이름: ${user.name} </div>
            <div>나이: ${user.age} </div>
            <div>학교: ${user.school} </div>
            <div>날짜: ${getToday()}  </div>
        </body>
    </html>
  `
}

export function sendWelcomeTemplateToEmail (email,mytemp) {
console.log(`${email} 이메일로 ${mytemp} 를전송합니다.`)

}