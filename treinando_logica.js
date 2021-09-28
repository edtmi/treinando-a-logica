// 1 - Atribuir um valor para variável A e outra para valor para a B.

// function changeValues(a,b) {
//   let aux = b
//   b = a;
//   a = aux;
  
//   return `A: ${a} B: ${b}`
// }
// console.log(changeValues(10,20))

// let a = 10;
// let b = 20;

// a = 20;
// b = 10;

// console.log("A:"+ a,"B:"+b);

// 2- Atribuir os valores as variáveis e verificar o valor de reatribuição da variável.
//a
// let a = 10;
// let b = 20;

// console.log(b);
// b = 5
// console.log(a,b)

//b

// let a = 30;
// let b = 20;
// let c = a + b;
// console.log(c);
// b = 10;
// console.log(b,c);
// c = a + b;
// console.log(a,b,c);

//c
  // let a = 10;
  // let b = 20;
  // let c = a;
  //     b = c;
  //     a = b;
  // console.log(a,b,c) /*10,10,10*/ 

 //d
    // let a = 10;
    // let b = a + 1; 
    // a = b + 1;
    // b = a + 1;
    // console.log(a); /* 12 */
    // a = b + 1;
    // console.log(a,b) /* 12 ,13 */

//e
  // let a = 10;
  // let b = 5;
  // let c = a + b;
  // b = 20;
  // a = 10;
  // console.log(a,b,c); /* 10, 20, 15 */

  //f
    // let x = 1;
    // let y = 2;
    // let z = y - x;
    // console.log(z); //z = 1
    // x = 5;
    // y = x + z; //y = 6
    // console.log(x,y,z) // 5, 6, 1

//3
//a
  let validate = false;
//   if (((4/2)+(2/4)) === (4/2 + 2/4)) {
//   validate = true;
//   } else {
//   validate = false;
//   }
//   console.log(validate);

// //b
//   if ((4/(2+2)/4) === (4/2 + 2/4)) {
//   validate = true;
//   } else {
//     validate = false;
//   }
//   console.log(validate);

// const valide = () => (4/(2+2)/4) === (4/2 + 2/4)
//   console.log(valide());

// c
    if (((4+2)*2-4) === (4+2*2-4)) {
      validate = true;
    } else {
      validate = false;
    }

    console.log(validate)