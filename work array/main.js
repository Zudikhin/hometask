let styles = ["jaz", "bluz", "lol", "kek", "test"];
styles[Math.floor((styles.length - 1) / 2)] = "Классика"; // добавляет в середину массива
styles.push("elemnt"); //добавляет в конец массива
console.log(styles.shift()); //удаляет первый элемент и возращает его
styles.unshift("first", "second"); //добавляет элементы в начало массива
console.log(styles);
