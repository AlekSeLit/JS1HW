function chessboard() {
  let newTable = document.createElement("table"),
    brim = [``, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, ``],
    whiteFigs1 = [
      `1`,
      `&#9814;`,
      `&#9816;`,
      `&#9815;`,
      `&#9813;`,
      `&#9812;`,
      `&#9815;`,
      `&#9816;`,
      `&#9814;`,
      `1`,
    ],
    whiteFigs2 = [
      `2`,
      `&#9817;`,
      `&#9817;`,
      `&#9817;`,
      `&#9817;`,
      `&#9817;`,
      `&#9817;`,
      `&#9817;`,
      `&#9817;`,
      `2`,
    ],
    blackFigs2 = [
      `7`,
      `&#9823;`,
      `&#9823;`,
      `&#9823;`,
      `&#9823;`,
      `&#9823;`,
      `&#9823;`,
      `&#9823;`,
      `&#9823;`,
      `7`,
    ],
    blackFigs1 = [
      `8`,
      `&#9820;`,
      `&#9822;`,
      `&#9821;`,
      `&#9819;`,
      `&#9818;`,
      `&#9821;`,
      `&#9822;`,
      `&#9820;`,
      `8`,
    ];
  for (let i = 0, a = 9; i < 10, a >= 0; i++, a--) {
    let Tr = newTable.insertRow(i);
    for (let j = 0; j < 10; j++) {
      let Td = Tr.insertCell(j);
      if (
        i > 0 &&
        i < 9 &&
        j > 0 &&
        j < 9 &&
        ((i % 2 == 1 && j % 2 == 1) || (i % 2 == 0 && j % 2 == 0))
      ) {
        Td.classList.toggle("black");
      }
      switch (i) {
        case 0:
          Td.innerText = brim[j];
          break;
        case 1:
          Td.innerHTML = blackFigs1[j];
          break;
        case 2:
          Td.innerHTML = blackFigs2[j];
          break;
        case 7:
          Td.innerHTML = whiteFigs2[j];
          break;
        case 8:
          Td.innerHTML = whiteFigs1[j];
          break;
        case 9:
          Td.innerText = brim[j];
          break;
        default:
          if (j === 0 || j === 9) {
            Td.innerHTML = a;
          }
          break;
      }
    }
  }
  document.body.prepend(newTable);
}

chessboard();
