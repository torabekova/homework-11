var matin = [];

for (var i = 0; i < 301; i++) {
  matin.push(i);
}

var men = [];

for (var i = 0; i < matin.length; i++) {
  matin[i] = `someone${i}`;
  men.push(i);
}

console.log(matin);

for (var i = 0; i < men.length; i++) {
  matin[men[i]] = men[i];
}


console.log(men);
