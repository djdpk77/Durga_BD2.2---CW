const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(num) {
  return num % 2 === 0;
}

app.get('/even-numbers', (req, res) => {
  let result = numbers.filter((num) => filterEvenNumbers(num));

  res.json(result);
});

let ages = [10, 20, 30, 15, 17, 25];

function filterAgesGreaterThan18(age) {
  return age > 18;
}

app.get('/adult-ages', (req, res) => {
  let result = ages.filter((age) => filterAgesGreaterThan18(age));

  res.json(result);
});

let words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];

function filterWordsGreaterThanFiveChars(word) {
  return word.length > 5;
}

app.get('/long-words', (req, res) => {
  let results = words.filter((word) => filterWordsGreaterThanFiveChars(word));

  res.json(results);
});

let fileSizes = [50, 200, 75, 120, 30, 90, 150];
function filterSmallerFileSizes(fileSize, filterParam) {
  return fileSize < filterParam;
}

app.get('/small-files', (req, res) => {
  let filterParam = req.query.filterParam;
  let results = fileSizes.filter((fileSize) =>
    filterSmallerFileSizes(fileSize, filterParam)
  );

  res.json(results);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
