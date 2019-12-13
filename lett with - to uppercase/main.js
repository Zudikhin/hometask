function camelize(str) {
  let arr = [];
  let separ = str.split("-");
  for (let i = 0; i < separ.length; i++) {
    let firstLetter = separ[i][0];
    if (typeof firstLetter !== "undefined") {
      let newLetter = firstLetter.toUpperCase();
      let newItem = newLetter + separ[i].slice(1);
      arr.push(newItem);
    }
  }
  let string = arr.join("");
  return console.log(string);
}

camelize("-liststyle-image");
