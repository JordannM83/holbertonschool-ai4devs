function findPairNum() {
  let verif = true;
  let i = 1;
  while (verif === true) {
    if (i % 2 === 0) {
      verif = false;
    }
    console.log(i);
    i += 2;
  }
}

findPairNum()