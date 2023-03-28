console.log("안녕하세요")


function getToken(aaa) {
  console.log(aaa)
  const result = String(Math.floor(Math.random()*10 ** aaa)).padStart(aaa,"0");
  console.log(result);
}

getToken(6)