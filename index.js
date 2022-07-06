// const cities = ['Kharkiv',
//   'Kiev',
//   ['Borispol', 'Irpin', ['Ternopil', 'Vinnitsa']],
//   'Odessa',
//   'Lviv',
//   'Dnieper'
// ];

// const items =
// `<ul>
// ${cities
//     .map(city => {
//       if (typeof city !== "string") {
//         return `<ul>${city.map(item => `<li>${item}</li>`).join('')}</ul>`;
//       }
//       return `<li>${city}</li>`;
//     })
//     .join('')}
// </ul>`;

// document.body.insertAdjacentHTML = items;



// --------варіант через рекурсію---------

  // const cities = ['Kharkiv',
  //     'Kiev',
  //     ['Borispol', 'Irpin', ['Ternopil', 'Vinnitsa']],
  //     'Odessa',
  //     'Lviv',
  //     'Dnieper'
  // ];

  // const renderItems = (arr)=>{
  //   const list = arr.map(el=>{
         
  //         if(Array.isArray(el)){
  //           return renderItems(el);
  //         }
  //         return `<li>${el}</li>`
  //     })

  //     return `<ul>${list.join('')}</ul>`
  // }
  // renderItems(cities);
  // document.body.insertAdjacentHTML = renderItems(cities);






// 2 ^ 3 = 2 * 2 * 2 = 8

// function pow(number, power = 3){
//     let result = 1;
//     for (let i = 0; i < power; i++) {
//         result *= number;
//     }
//     return result;
// }


// function powR(number, power){
//     return power === 1 ?
//         number :
//         number * powR(number = 2, power - 1);
// }

// function fact(number){
//     let factResult = 1;
//     for (let i = number; i > 0; i -= 1) {
//         factResult *= i;
//     }
//     return factResult;
// }

// function factR(number){
//     if (number === 1){
//         return 1;
//     }
//     return number * factR(number - 1);
//     // return number * (number * factR(3))
// }


// // powR(2, 3)

// //powR(2, 2)

// //powR(2, 1)


// //
// //
// // console.log(pow(2, 3));
// // console.log(powR(2, 3))


// console.log(fact(4))
// console.log(factR(4))
