/* # Ejercicios

## DOM

<header id="header" class="header">
  <h1 id="main-title" class="title title--big">Soy un título</h1>
  <h2 id="main-subtitle" class="subtitle subtitle--big">Soy un subtítulo</h2>
</header>

- Partiendo de este HTML, crea una función que reciba UN SOLO ELEMENTO (Elige uno de los 3) y muestre toda la información propia y de los otros dos elementos, padres, hermanos o hijos en función del elemento que hayas elegido. La función debe mostrar por consola el id, las clases, el textContent, el ancho y el alto de los tres elementos con un mensaje que no parezca de un robot */

const headerElement = document.getElementById('header');

const domInformation = element => {
  console.dir(element);

  console.log(`El id del eleemento seleccionado es \x1b[31m${element.id}\x1b[0m, en el cual tiene la siguiente clase: ${element.classList.value}. El contenido que tiene dicho elemento es: ${element.textContent} y su ancho es de ${element.clientWidth} y su alto es de: ${element.clientHeight}. Este elemento tiene ${element.children.length} elementos hijos: ${element.children[0].id} y ${element.children[1].id} y estos son los valores de cada uno: \n
  • ID: ${element.children[0].id} \n
  \t\t- Contenido: ${element.children[0].classList}\n
  \t\t- Contenido: ${element.children[0].textContent}\n
  \t\t- Ancho: ${element.children[0].clientWidth}\n
  \t\t- Alto: ${element.children[0].clientHeight}\n
  • ID: ${element.children[1].id} \n
  \t\t- Contenido: ${element.children[1].classList}\n
  \t\t- Contenido: ${element.children[1].textContent}\n
  \t\t- Ancho: ${element.children[1].clientWidth}\n
  \t\t- Alto: ${element.children[1].clientHeight}\n`);
};

domInformation(headerElement);

