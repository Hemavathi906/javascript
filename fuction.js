function sample(num){
    return num>0;
}
console.log(sample(20))
function main(){
    console.log("hi this is main function");
}
main()
console.log(findsum(3,5))//hoistig
function findsum(a,b){
    return a+b;
    
}
//default parameter
function defaultparam(name="hema"){
    console.log("hi",name)
}
defaultparam()
//recursion
function factorial(n){
    if(n==1)
        return 1
    return n*factorial(n-1)
}
console.log(factorial(5))

//arrow functoin
let value=(a,b)=>{return a*b}
console.log(value(2,3));