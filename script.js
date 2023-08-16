// Conditional operator
const age = 17;
let identitycardallowed;

if (age >= 16) {
  identitycardallowed = true;
} else {
  identitycardallowed = false;
}
console.log(identitycardallowed);
// true

// if statement
let number = 2;
if (number > 1) {
  console.log("lu bener gan 2 lebih besar dari 1");
} else {
  console.log("bisa ngitung ga lu?");
}
// lu bener gan 2 lebih besar dari 1

// if statement 2
const nextYear = 2023;
if (nextYear == 2023) {
  console.log("Tahun besok 2024");
} else {
  console.log("lupa tahun apa lo?");
}
// Tahun besok 2024

// if statement 3
const tahun = 2023;
if (tahun !== 2022) {
  console.log("Lu bener itu salah tahun");
} else {
  console.log("salah tanggal woi");
}
// Lu bener itu salah tahun

// if statement 4
let numbers = -2;
if (numbers > 0) {
  console.log("benar");
} else {
  console.log("salah");
}
// salah

// if statement 5
const year = 2023;
if (year == 2023) {
  console.log("benar ini tahun 2023");
} else {
  console.log("salah tahun");
}
// benar ini tahun 2023

// nested if else
const tahunBesok = 2024;
const a = tahunBesok > 2023;

if (a) {
  console.log("betul lebih dari 2023");
} else if (a) {
  console.log("bukan 2022");
} else {
  console.log("bisa langsung kesini");
}
// betul lebih dari 2023

// Konversi Boolean
const b = 0;
const pernyataan1 = true;
const pernyataan2 = false;
if (b === 0) {
  console.log(pernyataan1);
} else {
  console.log(pernyataan2);
}
//result
// true

// konversi bolean operator or
if (b || 0) {
  console.log(pernyataan1);
} else {
  console.log(pernyataan2);
}
// result
// false

// konversi not
if (b !== 1) {
  console.log(pernyataan1);
} else {
  console.log(pernyataan2);
}
// result
// true

// konversi and
const c = 1;
if (b == 0 && c == 1) {
  console.log("true");
} else if (b == 1 && c == 0) {
  console.log("false");
} else {
  console.log("perhatikan kembali pada variabelnya");
}
// result
// true
