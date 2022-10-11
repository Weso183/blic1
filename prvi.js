const objekt = {
  a: 222,
  b: 444,
  c: 333
};

function kljucevi(klj) {
  const kljuc = Object.keys(klj);
}
let isti = 0;
if (kljuc.length == 1) {
  for (let i = 0; i < kljuc.lenth; i++) {
    if (kljuc[i] === 1) isti++;
  }
}
if (isti === kljuc.length) return true;

return false;
