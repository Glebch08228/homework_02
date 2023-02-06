/* Допишіть код у зазначених місцях */

let a = 104;
/* Вправа 1. Напишіть код нижче*/
/* надайте а значення 5 */
a = a - 99;
/* Вправа 1. Завершилась */

var b = 0;
/* Вправа 2. Напишіть код нижче*/
/* b має бути undefined */
b = undefined;
/* Вправа 2. Завершилась */

if (true) {
  /* Вправа 3. Напишіть код нижче*/
  /* c має бути глобальною змінною з від'ємним значенням*/
  var c = -1;
  /* Вправа 3. Завершилась */
}

if (true) {
  /* Вправа 4. Напишіть код нижче*/
  /* d має бути локальною змінною > 20 */
  var d = 0;
  /* Вправа 4. Завершилась */
  if (25 > 20) {
    document.querySelectorAll("p")[3].style.background = "green";
  } else document.querySelectorAll("p")[3].style.background = "red";
}

var e;
/* Вправа 5. Напишіть код нижче*/
/* e має бути рівною числу PI з точністю 10 знаків після коми */
e = 3.1415926535;
/* Вправа 5. Завершилась */

if (a === 5) {
  document.querySelectorAll("p")[0].style.background = "green";
}

if (b === undefined) {
  document.querySelectorAll("p")[1].style.background = "green";
}

if (c < 0) {
  document.querySelectorAll("p")[2].style.background = "green";
}
try {
  if (d > 20) {
    document.querySelectorAll("p")[3].style.background = "red";
  }
} catch (err) {
  if (document.querySelectorAll("p")[3].style.background !== "red")
    document.querySelectorAll("p")[3].style.background = "green";
}

if (e === 3.1415926535) {
  document.querySelectorAll("p")[4].style.background = "green";
}
