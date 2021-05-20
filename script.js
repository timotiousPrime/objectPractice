// Task 1
// Write the code, one line for each action:

let user = {};

user.name = 'John';
user.surname = 'Smith';

user.name = 'Pete';

delete user.name;

const firstDiv = document.createElement('div');
firstDiv.textContent = user.name + '\n' + user.surname + '\n' + user;
document.body.appendChild(firstDiv);

//

// Task 2 
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let schedule = {}

function isEmpty(object){
    for (let prop in object) {
        // if loop starts, there is a property
        return true
    }
    return false
}


schedule['8:30'] = 'get up';

const secondDiv = document.createElement('div');
secondDiv.textContent = isEmpty(schedule);
document.body.appendChild(secondDiv);
//

// Task 3
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};


function sumSalaries(object){
    let total = 0;
    for (person in object) {
        total += object[person]
    }
    console.log(total)
    return total
};


const thirdDiv = document.createElement('div');
thirdDiv.textContent = sumSalaries(salaries);
document.body.appendChild(thirdDiv)
//

// Task 4
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
    width: 200,
    height:300,
    title: 'My Menu'
};

function multiplyNumeric(obj) {
    for (let prop in obj){
        if (isNaN(obj[prop])) {
            console.log(obj[prop] + ' is not a num')
            continue
        } else {
            obj[prop] += obj[prop]
            console.log(obj[prop])
        }
    }
}

//multiplyNumeric(menu)

// OR you can use: 

function difMultiplyNumeric(obj){
    for (let prop in obj){
        if (typeof obj[prop] == 'number') {
            obj[prop] *= 2;
        }
    } 
}

difMultiplyNumeric(menu)
//