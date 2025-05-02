function calcular() {
  let salario1 = parseFloat(document.getElementById("salario1").value);
  let preco1 = parseFloat(document.getElementById("preco1").value);
  let salario2 = parseFloat(document.getElementById("salario2").value);
  let preco2 = parseFloat(document.getElementById("preco2").value);

  if (salario1 > 0 && preco1 > 0 && salario2 > 0 && preco2 > 0) {
    let percentual1 = (preco1 * 100) / salario1;
    let percentual2 = (preco2 * 100) / salario2;

    document.getElementById(
      "resultado1"
    ).innerText = `No seu país, o produto equivale a ${percentual1.toFixed(
      2
    )}% do salário mínimo.`;
    document.getElementById(
      "resultado2"
    ).innerText = `No outro país, o produto equivale a ${percentual2.toFixed(
      2
    )}% do salário mínimo.`;

    document.getElementById("barra1").style.width =
      Math.min(percentual1, 100) + "%";
    document.getElementById("barra2").style.width =
      Math.min(percentual2, 100) + "%";
  } else {
    alert("Por favor, insira valores válidos!");
  }
}
