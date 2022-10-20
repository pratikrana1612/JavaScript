// pure function --> which produce same output and does not change any global variable value or send https request to the server 
// and not making any type of the side effects

// inpure function which is not the pure function 


let multipler = 1.2;
function createTaxCaluculator(tax) {
    function calculateTax(amount) {
        console.log(multipler);
        return amount * tax * multipler;
    }
    return calculateTax;
}

const calculateVatAmount = createTaxCaluculator(0.19);
const calculateIncomeTax = createTaxCaluculator(0.25);

multipler = 1.5;
console.log(calculateVatAmount(100));
console.log(calculateIncomeTax(200));

let userName = 'pratik';
function greetUser() {
    const name = 'Sohan';
    console.log('hi ' + name);
}
let name = 'Mohan';
userName = 'Rohan';
greetUser();

// a=20;b=23;
// console.log(sum());

function powerOf(x, n) {
    // if(n===1)
    // {
    //     return x;
    // }
    // return x*powerOf(x,n-1);
    return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));



const myself = {
    name:'Pratik',
    friends:[
        {
            name:'Rohan',
            friends:[
                {
                    name:'Varun',
                    friends:[
                        {
                            name:'Deep'
                        }
                    ]
                }
            ]
        },
        {
            name:'Julia',
            friends:[
                {
                    name:'Varun'
                }
            ]
        }
    ]
}

// function printFrieds(person)
// {
//     for(const friend of person.friends)
//     {
//         for(const friend2 of friend.friends)
//         {
//             console.log(friend2);
//         }
//     }
// }


function printFrieds(person)
{
    const friendsStore = [];
    if(!person.friends)
    {
        return [];
    }
    for(const friend of person.friends)
    {
        friendsStore.push(friend.name);
        friendsStore.push(...printFrieds(friend));
    }

    return friendsStore;
}

console.log(printFrieds(myself));