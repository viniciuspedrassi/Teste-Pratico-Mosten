function atualizarTotais() {
  atualizarTotalGostei();
  atualizarTotalNaoGostei();
}

async function atualizarTotalGostei() {
  const response = await fetch('http://localhost:8080/api/itens/total-gostei');
  const totalGostei = await response.json();
  document.getElementById('totalGostei').textContent = totalGostei;
}

async function atualizarTotalNaoGostei() {
  const response = await fetch(
    'http://localhost:8080/api/itens/total-nao-gostei'
  );
  const totalNaoGostei = await response.json();
  document.getElementById('totalNaoGostei').textContent = totalNaoGostei;
}

async function renderizarItens() {
  const response = await fetch('http://localhost:8080/api/itens');
  const itens = await response.json();
  const lista = document.getElementById('lista-itens');
  lista.innerHTML = '';
  itens.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
      <img src="${item.imagem}" alt="${item.titulo}">
      <h3>${item.titulo}</h3>
      <p><strong>Gênero:</strong> ${item.genero}</p>
      <p>${item.descricao || ''}</p>
      <p>👍: ${item.gostei} | 👎: ${item.naoGostei}</p>
<div class="botoes-voto">
  <button class="botao-gostei" onclick="votar(${
    item.id
  }, 'gostei')">Gostei</button>
  <button class="botao-nao-gostei" onclick="votar(${
    item.id
  }, 'nao-gostei')">Não Gostei</button>
</div>
    `;
    lista.appendChild(div);
  });
  atualizarTotais();
}

async function votar(id, tipo) {
  await fetch(`http://localhost:8080/api/itens/${id}/${tipo}`, {
    method: 'put',
  });
  renderizarItens();
}

async function salvar(event) {
  event.preventDefault();
  const titulo = document.getElementById('titulo').value;
  const genero = document.getElementById('genero').value;
  const imagem = document.getElementById('imagem').value;
  const descricao = document.getElementById('descricao').value;

  const novoItem = {
    titulo,
    genero,
    imagem,
    descricao,
    gostei: 0,
    naoGostei: 0,
  };

  await fetch('http://localhost:8080/api/itens', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(novoItem),
  });
  renderizarItens();
  document.getElementById('formulario').reset();
}

// Inicializa a página
renderizarItens();
