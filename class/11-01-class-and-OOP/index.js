const aaa =new Date()
console.log(aaa.getFullYear())
console.log(aaa.getMonth() +1)

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

  run =() =>{
    console.log("도망가자")
  }
}


const mymonster1 = new Monster(10)
mymonster1.att()
mymonster1.run()

const mymonster2 = new Monster(50)
mymonster2.att()
mymonster2.run()