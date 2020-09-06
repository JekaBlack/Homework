var person = {
    firstname: "Jake",
    age: 30,
    job: {
        company: 'Apple',
    }
};

while (true){
    var field = prompt('Enter field', '');

    if (!field) break;

    let value = prompt('Enter value', '');

    person[field] = value;
    
    if (field === undefined){
        console.log(field, value);
    }
}

console.log(person)