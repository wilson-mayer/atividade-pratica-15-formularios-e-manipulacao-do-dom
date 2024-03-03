function printaResultado() {
  let areasDeInteresse = [];

  let naturezaDoCargo = [];

  let radio = document.querySelectorAll('input[type="radio"]:checked');

  const nome = document.getElementById("nome").value;

  const endereco = document.getElementById("endereco").value;

  const cidade = document.getElementById("cidade").value;

  const estado = document.getElementById("estado").value;

  const curriculo = document.getElementById("curriculo").value;

  const checkedBoxes = document.querySelectorAll(
    'input[name="interesse"]:checked'
  );

  if (checkedBoxes.length < 1) {
    alert("É necessário marcar uma opção no mínimo.");
  }

  checkedBoxes.forEach(function (checkbox) {
    areasDeInteresse.push(checkbox.value);
  });

  radio.forEach(function (radio) {
    naturezaDoCargo.push(radio.value);
  });

  console.log({
    nome,
    estado,
    endereco,
    cidade,
    areasDeInteresse,
    naturezaDoCargo,
    curriculo,
  });
}

function limparDados() {
  document.getElementById("formulario").reset();
}
