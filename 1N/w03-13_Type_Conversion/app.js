let val;

// Number to string {number & sum}
val = String(311);
console.log("String(311) = ",val);

val = String(3+11);
console.log("String(311) = ",val);

// Bool to string
val = String(true);
console.log("String(ture) = ",val);

// Date to string
val = String(new Date());
console.log("String(new Date) = ",val);

// Array to string
val = String([3,6,9,12]);
console.log("String([3,6,9,12]) = ",val);

// toString() {number & bool}
val = (18).toString();
console.log("(18).toString = ",val);

val = (true).toString();
console.log("(true).toString = ",val);
// String to number {char & bool & null & string & array}
val = Number('20');
console.log("Number('20') = ",val);

val = Number(true);
console.log("Number(true) = ",val);

val = Number(false);
console.log("Number(false) = ",val);

val = Number(null);
console.log("Number(null) = ",val);

val = Number('hello');
console.log("Number('hello') = ",val);

val = Number([2,4,6,8,10]);
console.log("Number([2,4,6,8,10]) = ",val);
// parseInt & parseFloat
val = parseInt('125.12');
console.log("ParseINT = ",val);

val = parseFloat('125.12');
console.log("ParseFloat= ",val);
// Output {consol val & typeof val & val.length & val.to Fixed(2)}

console.log(val);

console.log(typeof val);

val ='hello';
console.log("length = ",val.length);

val = 120.256;
console.log("toFixed(2) = ",val.toFixed(2));

const val1 = String(5);
console.log("val1 = String(5)");

const val2 = 6;
console.log("val2 =6 ");

const sum = Number(val1 + val2);

//consol.log {sum & typeof sum}
console.log("Number(val1+val2) = ",sum);
console.log(typeof sum);