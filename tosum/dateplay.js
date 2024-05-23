const date = Date.now();
const expirationdate = new Date(date);
// console.log(expirationdate);

const todaysdate = new Date();

const expirationDate = new Date(todaysdate);

expirationDate.setDate(expirationDate.getDate() + 30);

const dat = new Date();
// console.log(`todays date ${dat}`);
console.log(
  `todays date ${todaysdate} \n 30 days from today is ${expirationDate}`
);
