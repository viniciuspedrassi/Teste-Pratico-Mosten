// Recupera os dados salvos ou define dados iniciais
let itens = JSON.parse(localStorage.getItem('itens')) || [
  {
    id: 1,
    titulo: 'Matrix',
    genero: 'Ficção Científica',
    descricao: 'Uma realidade simulada controlada por máquinas.',
    imagem: 'https://revistacontinente.com.br/image/view/news/image/2117',
    gostei: 0,
    naoGostei: 0,
  },
  {
    id: 2,
    titulo: 'Breaking Bad',
    genero: 'Drama/Crime',
    descricao: 'Professor vira produtor de metanfetamina.',
    imagem:
      'https://www.planocritico.com/wp-content/uploads/2020/06/breaking_bad_temporada_4_plano_critico-1-1024x683.jpg',
    gostei: 0,
    naoGostei: 0,
  },
  {
    id: 3,
    titulo: 'Harry Potter',
    genero: 'Fantasia/Aventura',
    descricao: 'Um jovem bruxo descobre seu destino em uma escola de magia.',
    imagem:
      'https://cienciahoje.org.br/wp-content/uploads/2025/02/harry-potter-pedra-filosofal-1024x579.jpg',
    gostei: 0,
    naoGostei: 0,
  },
  {
    id: 4,
    titulo: 'Senhor dos Anéis',
    genero: 'Fantasia Épica',
    descricao:
      'Uma jornada para destruir um anel poderoso que pode dominar o mundo.',
    imagem:
      'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/08/49428_1F18FCF04B4A8036-1.jpg?w=849&h=477&crop=0',
    gostei: 0,
    naoGostei: 0,
  },
  {
    id: 5,
    titulo: 'The Office',
    genero: 'Comédia',
    descricao: 'A vida cotidiana e engraçada de funcionários em um escritório.',
    imagem:
      'https://cdn2.nbcuni.com/NBCUniversal/styles/newsroom_stories_16_9_image_style/s3/2025-03/TheOfficeHeroArt.jpg?VersionId=OWiCWktqo6C3nlCQgPzSHcN.6JCD6TIm&h=d1cb525d&itok=P5OwzFXm',
    gostei: 0,
    naoGostei: 0,
  },
];

function salvarDados() {
  localStorage.setItem('itens', JSON.stringify(itens));
}

function atualizarTotais() {
  let totalGostei = 0,
    totalNaoGostei = 0;
  itens.forEach(item => {
    totalGostei += item.gostei;
    totalNaoGostei += item.naoGostei;
  });
  document.getElementById('totalGostei').textContent = totalGostei;
  document.getElementById('totalNaoGostei').textContent = totalNaoGostei;
}

function renderizarItens() {
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
      <button onclick="votar(${item.id}, 'gostei')">Gostei</button>
      <button onclick="votar(${item.id}, 'naoGostei')">Não Gostei</button>
    `;
    lista.appendChild(div);
  });
  atualizarTotais();
}

function votar(id, tipo) {
  const item = itens.find(i => i.id === id);
  if (item) {
    if (tipo === 'gostei') item.gostei++;
    else item.naoGostei++;
    salvarDados();
    renderizarItens();
  }
}

document.getElementById('formulario').addEventListener('submit', function (e) {
  e.preventDefault();
  const titulo = document.getElementById('titulo').value;
  const genero = document.getElementById('genero').value;
  const imagem = document.getElementById('imagem').value;
  const descricao = document.getElementById('descricao').value;

  const novoItem = {
    id: Date.now(),
    titulo,
    genero,
    imagem,
    descricao,
    gostei: 0,
    naoGostei: 0,
  };

  itens.push(novoItem);
  salvarDados();
  renderizarItens();
  e.target.reset();
});

// Inicializa a página
renderizarItens();
