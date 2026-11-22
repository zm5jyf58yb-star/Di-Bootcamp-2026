const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppinglist = ["banna", "orange", "apple"]

function myBill(){
    let totalPrice = 0;
    for(const item of shoppinglist){
        if(item in stock&stock[item] > 0){
            totalPrice += prices[item];
            stock[item]--;
        }
    }
    return totalPrice
}
const finalBill = myBill();
console.log("Total Bill:" + myBill)
console.log("Update Stock:", stock);
