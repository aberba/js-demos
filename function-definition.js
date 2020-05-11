//traditional way
function convert(name, age, address) {
  return name.toUpperCase();
}

convert("Lawrence", 60, "Sunyani");



// using object destructuring 
// more readable, 
// doesn't depend the order of parameters
function convert({ name, age, address }) {
  return name.toUpperCase();
}
convert({
  name: "Lawrence",
  age: 60,
  address: "Sunyani"
});



// object destructuring calling
// convention
let name = "Lawrence";
let age = 60;
let address = "Sunyani";
convert({
  name: name,
  age: age,
  address: address
});
convert({ name, age, address });