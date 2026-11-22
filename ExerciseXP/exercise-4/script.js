function hotelCost(){
    const oneNightCost = 140;
    let numberOfNights;

    while(true){
        let input = prompt("How manynights would you like to stay in hotel?");
        if(input === "" || isNaN(input)){
            alert("Please enter a number you want to stay!")
        }
        else{
            numberOfNights = Number(input);
            break;
        }
    }const totalHotelCost = oneNightCost * numberOfNights;
    return totalHotelCost;
}
// console.log(hotelCost())


function planeRideCost(){
    let destinations;
    while(true){
        let input = prompt("Enter your destinations!");
        const lettersOnly = /^[A-Za-z ]+$/;
        if(input === "" || !lettersOnly.test(input)){
            alert("Enter only destinations!")
        }else{
            destinations = input;
            break;
        }
        
    }switch(destinations.toLowerCase()){
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}
// const flightCost = planeRideCost()
// console.log("Your flight costs are : $" + flightCost);


function rentalCarCost(){
    let input = prompt("Enter how many day you want to rant Car!");
    let forOnedayCost = 40
    while(true){
        
        if(input === "" || isNaN(input)){
            alert("Please enter day how long you rant car!")
        }else{
            rentDay = Number(input)
            break;
        }
    }
    let totalCost = rentDay * forOnedayCost;
    
    if(input > 10){
        totalCost = totalCost * 0.95
    } 
    return totalCost;
}
// const carCost = rentalCarCost();
// console.log("Your car rental cost are: $" + carCost );


function totalVacationCost(){
    const car = rentalCarCost();
    const plane = planeRideCost()
    const hotel = hotelCost();

    const totalSum = car + plane + hotel

    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
    console.log(`Total Vacation Cost: $${totalSum}`);

}
totalVacationCost();