// Масиви списків
const array1 = [1, 2, 3];
const array2 = [1, 2, [1.1, 1.2, 1.3], 3];

// Функція generateList
function generateList(array) {
  const ul = document.createElement("ul");
  array.forEach((el) => {
    const li = document.createElement("li");

    if (Array.isArray(el)) {
      li.appendChild(generateList(el));
    } else {
      li.textContent = el;
    }

    ul.appendChild(li);
  });

  return ul;
}

const divElem = document.createElement("div");
divElem.className = "list";

divElem.appendChild(generateList(array1));
divElem.appendChild(generateList(array2));
document.body.appendChild(divElem);
