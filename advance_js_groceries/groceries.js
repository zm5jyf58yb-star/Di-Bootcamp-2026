let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
};

// 1. Create the displayGroceries arrow function
const displayGroceries = () => {
    groceries.fruits.forEach((fruit) => {
        console.log(fruit);
    });
};

const cloneGroceries = () => {
    // Copy the client variable
    let user = client;
    
    // Change client to "Betty"
    client = "Betty";

    let shopping = groceries;
    shopping.totalPrice = "35$";
    shopping.other.paid = false;
    
    console.log("user variable:", user); // Logs: "John"
    console.log("client variable:", client); // Logs: "Betty"
    console.log("groceries totalPrice:", groceries.totalPrice); // Logs: "35$"
    console.log("groceries paid status:", groceries.other.paid); // Logs: false
};

// Invoke the functions
displayGroceries();
cloneGroceries();
