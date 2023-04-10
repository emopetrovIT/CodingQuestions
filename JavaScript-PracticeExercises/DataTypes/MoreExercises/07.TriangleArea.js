function triangleArea(a, b, c) {
  let semiper = (a + b + c) / 2;

  let area = Math.sqrt(semiper * (semiper - a) * (semiper - b) * (semiper - c));

  console.log(area);
}

triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);
