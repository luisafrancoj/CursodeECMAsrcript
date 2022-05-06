const obj = {
  name: 'Luisa',
  age: 26,
  country: 'COL'
}

let { country, ...all} = obj;

console.log(all);

//

const obj1 = {
  name: 'Luisa',
  age: 26,
};
const obj2 = {
  ...obj1,
  country: 'COL'
};

console.log(obj1);

//

const HelloWorld = () => {
  return new Promise((resolve, reject) =>{
    (true)
      ? setTimeout(()=> resolve('hello world'), 1000)
      : reject(new Error ('Test Error'))
  });
};

HelloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(()=> console.log('finalizo'))

  //

  const regexData =  /([0-9]{4})-([0-9]{2})-([0-9]{2})/

  const match = regexData.exec('2018-04-20');

  const year = match[1];
  const month = match[2];
  const day = match[3];

  console.log(year, month , day);
