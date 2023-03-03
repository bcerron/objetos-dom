/* # Ejercicios

## Objetos

/* Copia el objeto teacher de los apuntes e imprime en distintos console.log cada uno de los datos. */

const teacher = {
  info: {
    name: 'Dorian',
    age: 25,
    courses: [
      {
        title: 'HTML',
        duration: 10
      },
      {
        title: 'CSS',
        duration: 20
      }
    ],
    portfolio: {
      experience: 7,
      technologies: ['HTML', 'CSS', 'JS']
    },
    sayHello: name => console.log(`Hola ${name}, soy Dorian!`)
  }
};

console.log(`Nombre: ${teacher.info.name}`);
console.log(`Edad: ${teacher.info.age}`);
console.log(`Cursos: ${teacher.info.courses[0].title} con una duración de ${teacher.info.courses[0].duration} y ${teacher.info.courses[1].title} con una duración de ${teacher.info.courses[1].duration}`);
console.log(`Tengo una experiencia de ${teacher.info.portfolio.experience} años y sé las siguientes tecnologías: ${teacher.info.portfolio.technologies}`);
teacher.info.sayHello('Pedro');

/* Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares. */
const data = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  data2: {
    data3: {
      numbersPlus2: []
    },
    data4: {
      numbersDouble: []
    }
  },
  data5: {
    numbersDividedBy2: []
  },
  data6: {
    onlyEven: [],
    onlyOdd: []
  }
};

for (const number of data.numbers) {
  data.data2.data3.numbersPlus2.push(number + 2);
  data.data2.data4.numbersDouble.push(number * 2);
  data.data5.numbersDividedBy2.push(number / 2);
  if (number % 2 === 0) {
    data.data6.onlyEven.push(number);
  } else {
    data.data6.onlyOdd.push(number);
  }
}

console.log(data.data2.data3.numbersPlus2);
console.log(data.data2.data4.numbersDouble);
console.log(data.data5.numbersDividedBy2);
console.log(data.data6.onlyEven);
console.log(data.data6.onlyOdd);

