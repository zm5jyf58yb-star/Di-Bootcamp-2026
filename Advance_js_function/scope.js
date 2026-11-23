// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
         a = 3;
    }
    alert (`inside the funcOne function ${a}`);
}
funcOne()
// it will crashes

// //#2
const a = 0;
function funcTwo() {
    a = 5;
}
function funcThree() {
    alert(`inside the funcThree function ${a}`);
}
// // #2.1 - run in the console:
funcThree() 
funcTwo()
funcThree()
// funcThree will be 0 .
// funcThree will be 5 because of pass from funcTwo a=5 .
// funcThree only will run if the variable is 
// declared with const instead of let .



//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// // #3.1 - run in the console:
funcFour()
funcFive()

// //#4
const a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const
// it will run because of re declared with let