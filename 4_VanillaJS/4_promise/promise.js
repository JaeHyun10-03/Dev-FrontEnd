// const p1 = new Promise((resolve, reject) => setTimeout(() => resolve(10)), 1000);
// const p2 = new Promise((resolve, reject) => setTimeout(() => resolve(20)), 2000);
// const p3 = new Promise((resolve, reject) => setTimeout(() => resolve(30)), 3000);

// let promise = [p1, p2, p3];

// Promise.all(promise).then((results) => {
//   const total = results.reduce((s, r) => s + r);
//   console.log(`결과 : ${results}`);
//   console.log(`합계: ${total}`);
// });

// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { name: 'Kim', email: 'kim@gmail.com' },
//         { name: 'Lee', email: 'lee@gmail.com' },
//         { name: 'Park', email: 'park@gmail.com' },
//       ]);
//     }, 2000);
//   });
// }

// function findUser(users) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(users.find((user) => user.name === 'Kim'));
//     });
//   });
// }

// function getEmail(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(user.email);
//     }, 3000);
//   });
// }

// getUser().then(findUser).then(getEmail).then(console.log);

// const p1 = new Promise((resolve, reject) => setTimeout(() => resolve('A'), 1000));
// const p2 = new Promise((resolve, reject) => setTimeout(() => resolve('B'), 2000));

// let promises = [p1, p2];

// Promise.all(promises).then((results) => {
//   console.log('완료', results); // 모든 프로미스가 완료되었음을 출력
// });

/*
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
});
const p2 = () =>
  new Promise((resolve, reject) => {
    setTimeout((p1) => {
      resolve(p1 * 10);
    }, 1500);
  });
const promises = [p1, p2];
Promise.all(promises)
  .then((results) => {
    console.log(results); // 모든 프로미스가 완료되었음을 출력
  })
  .catch(() => {
    console.log('에러');
  });
*/

// let success = true;
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (success) {
//       resolve(5);
//     } else {
//       reject('에러');
//     }
//   }, 1000);
// });

// promise.then((num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num * 10);
//     }, 1500);
//   })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// class Greeter {
//   async sayHello() {
//     return '안녕4';
//   }
// }
// const greeter = new Greeter();
// greeter.sayHello().then(console.log);

function sayHello() {
  return Promise.resolve('안녕');
}


