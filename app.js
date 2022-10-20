// pure function --> which produce same output and does not change any global variable value or send https request to the server 
// and not making any type of the side effects

// inpure function which is not the pure function 


let multipler = 1.2;
function createTaxCaluculator(tax)
{
    function calculateTax(amount)
    {
        console.log(multipler);
        return amount*tax*multipler;
    }
    return calculateTax;
}

const calculateVatAmount = createTaxCaluculator(0.19); 
const calculateIncomeTax = createTaxCaluculator(0.25);

multipler=1.5;
console.log(calculateVatAmount(100));
console.log(calculateIncomeTax(200));

let userName = 'pratik';
function greetUser()
{
    const name= 'Sohan';
    console.log('hi ' + name);
}
let name = 'Mohan';
userName = 'Rohan';
greetUser();

// a=20;b=23;
// console.log(sum());


