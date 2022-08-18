console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


//Exe1
/*
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum() {
    let sum = 0;

    for(let num of numbers) {
        console.log(`sum = ${sum} = ${num}`)
        sum += num;
    }
    
    console.log(`Your sum is ${sum}`)
}

arraySum()
*/

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum (arr) {
    let sum = 0;

    arr.forEach((num) => {
        sum += num; 
        
        //for (let index = 0; index < arr.length; index++) {
            //sum += arr[index];
    });
    
    console.log(sum);
    
};

arraySum(numbers)

