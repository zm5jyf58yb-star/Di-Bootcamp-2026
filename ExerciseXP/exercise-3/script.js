function changeEnought(itemPrice, amountOfChange){

    const quarters = amountOfChange[0];
   
    const dimes = amountOfChange[1];  
  
    const nickels = amountOfChange[2]; 

    const pennies = amountOfChange[3]; 

    const totalPocketChange = (quarters * 0.25) + (dimes * 0.10) + (nickels * 0.05) + (pennies * 0.01);
    
    return totalPocketChange >= itemPrice;


}
console.log(changeEnought(4.25, [25, 20, 5, 0]));