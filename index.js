class freelancer {
    constructor(name, occupation, price){
        this.name = name;
        this.occupation = occupation;
        this.price = price;
    }
}

let allFreelancers = []

const averagePriceText = document.querySelector(".averagePrice")

const possibleNames = [
    "Bob",
    "Timmy",
    "Francis",
    "Zargothrax",
    "Beth",
    "Sammy",
    "Angus",
    "Daisy",
    "Trent",
    "Janelle"
]

const possibleOccupations = [
    "Teacher",
    "Construction Worker",
    "Manager",
    "Plumber",
    "Evil Wizard",
    "Lawyer",
    "Electrcian",
    "Doctor",
    "Barber",
    "Accountant"
]

function randomNumberBetween(firstNum, lastNum){
    return Math.trunc(Math.random()*((lastNum + 1) - firstNum)) + firstNum
}

function addFreelancer(){
    const newFreelancer = new freelancer(possibleNames[randomNumberBetween(0, 9)], (possibleOccupations[randomNumberBetween(0, 9)]), randomNumberBetween(15, 100))
    const tableEntry = document.createElement("tr");
    tableEntry.innerHTML = `<td>${newFreelancer.name}<td>${newFreelancer.occupation}<td>${newFreelancer.price}`;
    document.getElementById("theTable").appendChild(tableEntry);
    allFreelancers.push(newFreelancer)
    averagePriceText.textContent=`The average starting price is $${getAveragePrice()}`
}

for(i = 0; i < 3; i++){
    addFreelancer()
}

function getAveragePrice(){
    let sumOfPrices = 0;
    console.log(sumOfPrices)
    allFreelancers.forEach(element => {
        sumOfPrices = sumOfPrices + element.price
        console.log(element)
    })
    return sumOfPrices / allFreelancers.length
}

setInterval(addFreelancer, 3000)





