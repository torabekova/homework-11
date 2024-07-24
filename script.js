var matin = prompt("matin kiriting");

function summa(matin) {
  var jami = 0;
  for (var i = 0; i < matin.length; i++) {
    jami += i;
  }
  return jami;
}

var natija = summa(matin);
console.log("indexlar total", +natija);
