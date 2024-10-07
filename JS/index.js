let a = Number(prompt("Когда началась вторая мировая война?"));

let b = prompt("Какое небесное тело освещает Землю днём?");

let c = Number(prompt("Сколько месяцев в году?"));

let score = 0;


if (a === 1939) {
  console.log("Верно");
  score++;
} else {
  console.log("Неверно");
}


if (b === "Солнце") {
  console.log("Верно");
  score++;
} else {
  console.log("Неверно");
}


if (c === 12) {
  console.log("Верно");
  score++;
} else {
  console.log("Неверно");
}

console.log("Баллы: " + score + " из 3");