function calcularNota() {
  const p1 = parseFloat(document.getElementById('p1').value);
  const p2 = parseFloat(document.getElementById('p2').value);
  const iaf = parseFloat(document.getElementById('iaf').value);
  const pr = parseFloat(document.getElementById('pr').value);

  if (isNaN(p1) || isNaN(p2) || isNaN(iaf) || isNaN(pr) ||
      p1 < 0 || p1 > 3 ||
      p2 < 0 || p2 > 3 ||
      iaf < 0 || iaf > 1 ||
      pr < 0 || pr > 7) {
    document.getElementById('resultado').innerText = 'Por favor, insira corretamente as informações.';
    return;
  }

  const notaFinal = (p1 + p2 + iaf + pr) / 2;

  document.getElementById('resultado').innerText = `Sua nota final pós PR é: ${notaFinal.toFixed(2)}`;
}

function calcularNotaComExtras() {
  const sd = parseFloat(document.getElementById('sd').value);
  const pic = parseFloat(document.getElementById('pic').value);
  const pontoExtra = parseFloat(document.getElementById('ponto-extra').value);

  if (isNaN(sd) || isNaN(pic) || isNaN(pontoExtra) ||
      sd < 0 || sd > 1.5 ||
      pic < 0 || pic > 1.5 ||
      pontoExtra < 0 || pontoExtra > 0.5) {
    document.getElementById('resultado-extra').innerText = 'Por favor, insira corretamente as informações extras.';
    return;
  }

  const notaFinalBase = parseFloat(document.getElementById('resultado').innerText.split(': ')[1]);
  const notaComExtras = notaFinalBase + sd + pic + pontoExtra;

  document.getElementById('resultado-extra').innerText = `Sua nota final com extras é: ${notaComExtras.toFixed(2)}`;
}

function toggleExtra() {
  const extraInputs = document.getElementById('extraInputs');
  const verMaisBtn = document.getElementById('verMaisBtn');
  if (extraInputs.classList.contains('hidden')) {
      extraInputs.classList.remove('hidden');
      verMaisBtn.innerText = '-';
  } else {
      extraInputs.classList.add('hidden');
      verMaisBtn.innerText = '+';
  }
}
