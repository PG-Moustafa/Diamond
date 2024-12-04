
function diamond(
) {
  let n = 1;
  let str = "";
  let rows = window.prompt("Enter the number of rows: ")

  // Top half of the diamond
  for (let i = 1; i <= rows; i++) {

    for (let j = 1; j <= rows - i; j++) {
      str += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += "*";
    }

    str += "\n";
  }

  // Bottom half of the diamond
  for (let i = rows - 1; i >= 1; i--) {

    for (let j = 1; j <= rows - i; j++) {
      str += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += "*";
    }

    str += "\n";
  }

  console.log(str);
}

diamond();