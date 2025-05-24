fetch('./data/projetos.json')
  .then(res => res.json())
  .then(data => {
    const concluido = data.filter(p => p.status === "concluido");
    const desenvolvimento = data.filter(p => p.status === "em desenvolvimento");

    const containerConcluido = document.getElementById('projetos-concluidos');
    const containerDev = document.getElementById('projetos-dev');

    concluido.forEach(projeto => {
      containerConcluido.innerHTML += renderizaProjeto(projeto);
    });

    desenvolvimento.forEach(projeto => {
      containerDev.innerHTML += renderizaProjeto(projeto);
    });
  });

function renderizaProjeto(projeto) {
  return `
    <div class="card">
      <img src="./img/${projeto.imagem}" alt="${projeto.nome}">
      <h3>${projeto.nome}</h3>
      <p>${projeto.descricao}</p>
      <div class="progress-bar">
        <div class="progress" style="width:${projeto.progresso}%"></div>
      </div>
      <p>Progresso: ${projeto.progresso}%</p>
      <p>Tecnologias: ${projeto.tecnologias.join(', ')}</p>
      <a href="${projeto.linkSite}" target="_blank">Ver Projeto</a>
      <a href="${projeto.linkGithub}" target="_blank">GitHub</a>
    </div>
  `;
}
// Adiciona o evento de clique para o botão "Ver Mais"
const verMaisBtn = document.getElementById('ver-mais');
verMaisBtn.addEventListener('click', () => {
  const projetosConcluidos = document.getElementById('projetos-concluidos');
  const projetosDev = document.getElementById('projetos-dev');
  projetosConcluidos.classList.toggle('hidden');
  projetosDev.classList.toggle('hidden');
});