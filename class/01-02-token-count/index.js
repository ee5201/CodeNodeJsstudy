console.log("안녕하세요")


function getToken(aaa) {
  // undefined
  // null 강제로 비웠을 떄 어떤 값을 강제적으로 비우려고 했을 때  개발자 암묵적 규칙
  if(aaa === undefined ){
    console.log("에러발생한다. 갯수를 입력해주세요")
    return;
  }else if (aaa <= 0){
    console.log("에러발생 !!! 갯수가 너무 적습니다.")
    return
  }else if(aaa >10) {
    console.log('에러발생!!! 갯수가 너무 많습니다.')
    return
  }
  const result = String(Math.floor(Math.random()*10 ** aaa)).padStart(aaa,"0");
  console.log(result);
}

getToken(11)