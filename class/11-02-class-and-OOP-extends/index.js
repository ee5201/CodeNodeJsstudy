class Monster {
  power= 10 

  constructor(aaa){
    //생성자라고 한다. 
    this.power = aaa

  }

  att = () =>{
    console.log( "공격하자")
    console.log("내공격력은 "+this.power+"이야")
    this.run()
  }
}



class SkyMonster extends Monster {
  constructor(qqq){
    //생성자라고 한다. 
    super(qqq)

  }
  run =() =>{
    console.log("닐아서 도망가자")
  }
}


class GroundMonster extends Monster {
  constructor(www){
    //생성자라고 한다. 
    super(www)
  }

  run =() =>{
    console.log("뛰어서 도망가자")
  }
}

const mymonster1 = new SkyMonster(30)
mymonster1.att()
mymonster1.run()
const mymonster2 = new GroundMonster(10)
mymonster2.att()
mymonster2.run()