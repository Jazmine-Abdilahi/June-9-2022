// Blind Method
// book.call(eurowing, 23, 'Sarah Williams');

const booked = book.blind(eurowings);
const bookLH = book.blind(lufthansa);
const bookLX = book.blind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.blind(eurowings, 23);
bookEW233('Jazmine Abdilahi');
bookEW23('Martha Cooper');

//With Event Listeners
lusthansa.planes = 300;
lufthansa.buyPlanes = function () {
    cpnsole.log(this);
     this.planes++;
     console.log(this.planes);
};
// lufthansa.buyPlane()

document
 .querySelector('.buy')
 .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

 // Partial Application
 const addTax = (rate, value) => value + value + value + rate; 
 console.log(addTax(0.1, 200));

 const addVAT = asTax.bind(null, 0.23);
 // addVAT = value => value + value * 0.23;

 console.log(addVAT(100));
 console.log(addVAT(23));

 const addTaxrate = function (rate) {
     return function (value) {
         return value + value * rate;
     };
 };
 const addVat2 = addTaxRate(0.23);
 console.log(addVat2(100));
 console.log(addVAT2(23));