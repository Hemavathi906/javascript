let item={
    productname:"lipstick",
    brand:"mac",
    price:100,
    arr:["orange","apple","graps"],
    log(){
        console.log("hi this is log");
    },
    login(){
        console.log("hi this is login ");
    }

}
console.log(item.log())
console.log(item.login())
console.log(item)
console.log(item.arr[0]);
let item1=new Object();
item1.productname="lipstict"
item1.brand="lakme"
item1.price=200
console.log(item1)
console.log(item.productname);  
item.price=150
console.log(item.price)
item.quality=1
console.log(item['price'])
let key='price'
item[key]=300
console.log(item.price);

