// pure function --> which produce same output and does not change any global variable value or send https request to the server 
// and not making any type of the side effects

// inpure function which is not the pure function 


let multipler =
function createTaxCaluculator(tax)
{
    function calculateTax(amount)
    {
        return amount*tax;
    }
    return calculateTax;
}

const calculateVatAmount = createTaxCaluculator(0.19); 
const calculateIncomeTax = createTaxCaluculator(0.25);


console.log(calculateVatAmount(100));
console.log(calculateIncomeTax(200));

