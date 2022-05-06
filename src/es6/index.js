function newFunction(name,age,country){
  var name = name || 'oscar';
  var age = age || 32;
  var country = country || 'MX';
  console.log(name, age, country);
}

//ES6

function newFunction2(name = 'oscar', age = 32, country= "MX"){
  console.log(name, age, country);
}

newFunction2(); //mostraria los elementos por defecto
newFunction2('Ricardo', 23 , 'CO' )

//Template literal

let hello = 'hello';
let world = 'world';
let phrase= hello + ' '+ world;
let phrase2= `${hello} ${world}`;

console.log(phrase, phrase2);

// Multilinea

let lorem2 = `frase epica numero1
otra frase epica
`;

// Destructuracion de elementos

let person = {
  'name': 'oscar',
  'age' : 32,
  'country': 'MX'
}

console.log(person.name, person.age);

let{ name, age, country } = person; //nueeva forma

console.log(name, age, country)

//Operador de propagacacion

let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']


let education = ['David', ...team1, ...team2]

//Variables

{
  var globalVar = 'Global Var';
}

{
  let globlalLet = 'Global Let';
}

console.log(globalVar);
console.log(globlalLet);

const a = 'b';

//

let name = 'Luisa';
let age = 26;

//Crear un objeto anteriormente

obj = { name: name , age: age};

//Crear un objeto es6

obj2= {name, age};



// ARROW FUNCTIONS

  const names = [
  {
    name: 'Luisa',
    age: 26
  },
  {
    name: 'Yesica',
    age: 27
  }]

  let listOfname = names.map(function(item) {
    console.log(item.name);
  })

  // ES6

  let listOfname2 = names.map(item => console.log(item.name));

  const listOfname3 = (name, age ,country) => {
    ...
  }

  //PROMESAS

  const helloPromise = () => {
    return new Promise((resolve,reject) => {
      request = API.news
      if (request == 'success') {
        resolve('Llego notica!');
      } else {
        reject('Intentalo mas tarde!');
      }
      // if (true) {
      //   resolve('Hey!');
      // }else {
      //   reject('Ups!');
      // }
    })
  }

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));


  const pairValidation = (number) => {
    return new Promise((resolve,reject) => {
      if (number % 2 === 0) {
        resolve('The number is pair')
      } else {
        reject ('Please insert a pair number')
      }
    })
  }

  pairValidation(2)
  .then(response => console.log(response))
  .catch(error => console.log(error));

   CLASES, MODULOS Y GENERADORES

   class calculator {
    constructor (){//metodo obligatorio que debe tener cada clase
      this.valueA = 0;
      this.valueB = 0;
    }
    sum(valueA, valueB){// funcion de clase //
      this.valueA= valueA;
      this.valueB= valueB;
      return this.valueA + this.valueB;
    }
    }

   const calc = new calculator();
   console.log(calc.sum(2,2))

    // MODULOS EXPORTACIONES E IMPORTACIONES

    import hello from 'module.js'

    // GENERATOR

    function* helloWorld() {
      if (true){
        yield 'Hello, ';
      }

      if (true) {
        yield 'World';
      }
    };

    const generatorHello = helloWorld();

    console.log (generatorHello.next().value);
    console.log (generatorHello.next().value);
    console.log (generatorHello.next().value);