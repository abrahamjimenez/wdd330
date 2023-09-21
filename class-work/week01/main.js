// function1() // No error. It is hoisted
// function2(function1) // This is not hoisted so this will return an error

// function declaration
function function1() {
  console.log('function1');
}

// function expression
const function2 = function (callback) {
  console.log('function2');
  // do some stuff
  // run callback
  callback();
};

// expression with arrow function
const function3 = () => {
  console.log('function3');
};

const double = (num) => {
  return num * 2;
};

const doubleShort = (num) => num * 2;

const baseUrl = 'https://pokeapi.co/api/v2/type/';

async function getTypes() {
  const response = await fetch(baseUrl);
  console.log(response);
  const data = await response.json();
  console.log('data:', data);
  return data;
}

function typeTemplate(item) {
  return `<li>${item.name}</li>`;
}

async function buildTypeList() {
  const types = await getTypes();
  console.log('types:', types);
  const listEl = document.querySelector('#typeList');
  const html = types.results.map(typeTemplate);
  listEl.innerHTML = html.join();
}

buildTypeList();
