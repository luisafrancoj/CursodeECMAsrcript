// const button = document.getElementById('btn');

// button.addEventListener('click', async function () {
//     const module = await import('file.js');
//     module.hello();
// })

//BigInt

const aBigNumber = 9007199254740991n;

const anotherBigNumer= BigInt(9007199254740991);

console.log(aBigNumber, anotherBigNumer);

//

const promise1 = new Promise((resolve,reject) => reject("reject"));

const promise2 = new Promise((resolve,reject) => reject("resolve"));

const promise3 = new Promise((resolve,reject) => reject("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));


console.log(globalThis)

//
const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)

//

const user = {
    email: 'test@gmail.com'
  },

console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}