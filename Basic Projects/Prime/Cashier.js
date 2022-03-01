//help the cashier return the right of change


//Programme input: 

//Amount due
var total = prompt('Total due:');

//Amount paid by the customer
var moneyPaid = prompt('Amount paid:');

//convert collected values to float numbers. Make sure the decimal part has two digits only.
total = parseFloat(total).toFixed(2);
moneyPaid = parseFloat(moneyPaid).toFixed(2);

//Programme output:

//calculate the change amount.Make sure the decimal part has two digits only.
var change = (moneyPaid - total).toFixed(2);

//Print the amount due/ amount paid/ change
console.log('Due: £' + total + '/ Paid: £' + moneyPaid + '/ Change: £' + change);

//Print change breakdown: notes and coins

var note_coin;

//£50 note
note_coin = [{
        value: 50,
        name: '£50 notes: '
    },
    {
        value: 20,
        name: '£20 notes: '
    },
    {
        value: 10,
        name: '£10 notes: '

    },
    {
        value: 5,
        name: '£5 notes: '
    },
    {
        value: 2,
        name: '£2 notes: ',
    }

];

for (var i = 0; i < note_coin.length; i++) {
    note_coin[i].return = Math.floor(change / note_coin[i].value);
    change = (change % note_coin[i].value).toFixed(2);
    note_coin[i].return > 0 ? console.log(note_coin[i].name + note_coin[i].return) : 0;
}