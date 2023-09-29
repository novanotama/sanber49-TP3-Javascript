const prompt = require('prompt-sync')();

function calculateSquareRoot(x) {
  if (x === 0) {
    return "Akar pangkat 2 dari 0 adalah 0";
  } else if (x === 1) {
    return "Akar pangkat 2 dari 1 adalah 1";
  } else if (x < 0) {
    return "Tidak bisa input bilangan negatif";
  } else if (x % 2 !== 0) {
    return "Tidak bisa input bilangan ganjil";
  } else {
    return Math.sqrt(x);
  }
}

const userInput = parseFloat(prompt("Masukkan angka yang akan diuji: "));

if (isNaN(userInput)) {
  console.log("Input tidak valid. Masukkan angka.");
} else {
  console.log(`Angka yang akan diuji: ${userInput}`);
  const result = calculateSquareRoot(userInput);
  console.log(`Hasil: ${result}`);
}