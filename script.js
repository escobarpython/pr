function calcularNota() {
   
    const p1 = parseFloat(document.getElementById('p1').value);
    const p2 = parseFloat(document.getElementById('p2').value);
    const iaf = parseFloat(document.getElementById('iaf').value);
    const pr = parseFloat(document.getElementById('pr').value);
  
    
    if (isNaN(p1) || isNaN(p2) || isNaN(iaf) || isNaN(pr) ||
        p1 < 0 || p1 > 3 ||
        p2 < 0 || p2 > 2 ||
        iaf < 0 || iaf > 2 ||
        pr < 0 || pr > 7) {
      document.getElementById('resultado').innerText = 'Por favor, insira corretamente as informações. Provavelmente você recebeu esta mensagem pois os dados inseridos não estão de acordo com o maximo proposto. Caso esteja errado, comunique com um print o criador do site (@escobarpython).';
      return;
    }
  
  
    const notaFinal = (p1 + p2 + iaf + pr) / 2;
  
  
    document.getElementById('resultado').innerText = `Sua nota final pós PR é: ${notaFinal.toFixed(2)}`;
  }
  
