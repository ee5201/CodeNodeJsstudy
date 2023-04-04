export function checkVaild () {
  if (myphone.length !== 10 && myphone.length !== 11) {
    console.log('에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!');
    return false;
} else {
    return true;
}
}

export function getToken () {
  const mycount = 6
  if(mycount === undefined){
    console.log("에러발생 !! 갯수를 제대로확인바람")
    return;
  }else if(mycount <= 0){
    console.log("갯수가 너무 적습니다.")
    return;
  }else if(mycount > 10){
    console.log('에러 발생')
  }

  const result = String(Math.floor(Math.random()*10 ** mycount)).padStart(mycount,"0")
}