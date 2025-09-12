const student = {
    name: "Alim",
    surname: "Shirakhunov",
    group: "IT-123",
    currentMonth: 9,
    isGraduate: false,
    major: "Information Technology",
    monthComplited: 9
}

const bank = {
    accountNumber: '1234567890',
    currency: 'Сом',
    balance: 10000,
    ownerName: "Noname",
    isBlocked: false
}

var Name = prompt('Enter your name');
var LastName = prompt('Enter your last name');
document.writeln("Здравствуйте, " + Name + ' ' + LastName + '!');