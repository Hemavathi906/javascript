class Main{
    static number=0;
    constructor(name,age){
        this.name=name;
        this.age=age;
        Main.number++;

    }
    fun(){
        console.log("hi this fun method")
    }
    voi(){
        console.log("hi this is void method")
    }
        static display(){
            console.log("hi this is static method")


        }
    }
let user=new Main('hema.20')
user.fun()
Main.display()
//inheritance
class Hema extends Main{
    mess(){
        console.log("hi this mess method")
    }
}
let hems=new Hema();
hems.fun();
hems.mess();