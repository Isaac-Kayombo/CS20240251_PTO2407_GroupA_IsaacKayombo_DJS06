// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// ---------------------------------------------------------

// USING forEach METHOD TO LOG NAMES AND PROVINCES

names.forEach((name) => {
  console.log(name);
});

provinces.forEach((province) => {
  console.log(province);
});

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});
// ---------------------------------------------------------

// USING MAP METHOD TO CREATE UPPERCASE ARRAY OF PROVINCES AND ARRAY OF THE LENGTH OF EACH NAME

const provincesInUpperCase = provinces.map(province => province.toUpperCase());
console.log(provincesInUpperCase);

const nameLengths = names.map(name => name.length);
console.log(nameLengths); // Outputs: [6, 9, 11, 5, 7, 7]

// SORTS THE PROVINCES ALPHABETICALLY
provinces.sort()
console.log(provinces);

// FILTERS PROVINCE THAT DON'T CONTAIN "Cape"
const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(filteredProvinces.length);

// NAMES THAT CONTAIN THE LETTER "S"
const sLetterInName = names.map(name => 
  name.includes('S')
);
console.log(sLetterInName);

// CREATING A OBJECT WITH BOTH NAMES AND PROVINCES
const nameAndProvince = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameAndProvince);
// -----------------------------------------------------------


//ADVANCED SINGLE CONSOLE.LOG EXECUTION

// Logs each product in the 'products' array to the console using forEach method
console.log(products.forEach(p => console.log(p.product)));

// Logs products whose length is less than or equal to 5
console.log(products.filter(p => p.product.length <= 5));

// Filters out products with valid numeric prices
console.log(products.filter(p => !isNaN(parseFloat(p.price))).reduce((sum, p) => sum + parseFloat(p.price), 0));

// Concatenates all products array into a single string
console.log(products.reduce((acc, p) => acc + p.product, ''));

/* Logs a function (not its result) that filters out products with invalid prices, parses prices to floats,
console.log(() => {
  const priced = products.filter(p => !isNaN(parseFloat(p.price))).map(p => ({...p, price: parseFloat(p.price)}));
}); */

// Logs a new array of objects where each product is transformed to have 'name' and 'cost'
console.log(products.map(p => Object.entries({ name: p.product, cost: p.price }).reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {})));