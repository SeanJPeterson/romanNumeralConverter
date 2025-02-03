const form = document.getElementById("a-form");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertDecimal = romanNum => {
  const numRef = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  const numRes = [];

  numRef.forEach(function (numArr) {
    while (romanNum >= numArr[1]) {
      numRes.push(numArr[0])
      romanNum -= numArr[1]
    }
  });

  return numRes.join('')
};

const validNumber = (str, int) => {
  let errText = '';

  if (!str || str.match(/[e.]/g)) {
    errText = 'Please enter a valid number';
  } else if (int < 1) {
    errText = 'Please enter a number greater than or equal to 1';
  } else if (int > 3999) {
     errText = 'Please enter a number less than or equal to 3999';
  } else {
    return true;
  }

  output.innerText = errText;
  output.classList.add('alert');

  return false;
};

const clenseOutput = () => {
  output.innerText = '';
  output.classList.remove('alert');
};

form.addEventListener('submit', e => {
  e.preventDefault();
  updateUINow();
});

convertBtn.addEventListener('click', () => {
  updateUINow();
});

const updateUINow = () => {
  const romanNumStr = document.getElementById('number').value;
  const int = parseInt(romanNumStr, 10);

  output.classList.remove('hidden');

  clenseOutput();

  if (validNumber(romanNumStr, int)) {
    output.innerText = convertDecimal(int);
  }
};
