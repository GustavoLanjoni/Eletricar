// Gerenciamento de Serviços
const formServicos = document.getElementById('form-servicos');
const listaServicos = document.getElementById('lista-servicos');
const filtroServico = document.getElementById('filtro-servico');

// Gerenciamento de Carros
const formCarros = document.getElementById('form-carros');
const listaCarros = document.getElementById('lista-carros');

// Associação Serviço-Carro
const formServicoCarro = document.getElementById('form-servico-carro');
const selectCarro = document.getElementById('select-carro');
const selectServico = document.getElementById('select-servico');
const historicoServicoCarro = document.getElementById('historico-servico-carro');

// Adicionar Serviço
formServicos.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome-servico').value;
  const descricao = document.getElementById('descricao-servico').value;
  const valor = document.getElementById('valor-servico').value;
  
  const li = document.createElement('li');
  li.textContent = `${nome} - R$${valor}`;
  listaServicos.appendChild(li);

  const option = document.createElement('option');
  option.textContent = nome;
  option.value = nome;
  selectServico.appendChild(option);

  formServicos.reset();
});

// Adicionar Carro
formCarros.addEventListener('submit', (e) => {
  e.preventDefault();
  const placa = document.getElementById('placa-carro').value;
  const modelo = document.getElementById('modelo-carro').value;
  const ano = document.getElementById('ano-carro').value;
  
  const li = document.createElement('li');
  li.textContent = `${modelo} (${placa}) - ${ano}`;
  listaCarros.appendChild(li);

  const option = document.createElement('option');
  option.textContent = `${modelo} (${placa})`;
  option.value = placa;
  selectCarro.appendChild(option);

  formCarros.reset();
  
});

