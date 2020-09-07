var person1 = {
    firstname: "Jake",
    age: 30,
    job: {
        company: 'Apple',
    }
};

while (true){
    var field = prompt('Введите характеристику', '');

    if (!field) break;

    if (field in person1) {
        alert('Эта харктеритика уже есть ' + person1[field]);
    } else {
        var value = prompt('Введите значение этой характеристики', '');

        person1[field] = value;
    }
};

console.log(person1)