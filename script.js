const jokes = [
  "Por que o pássaro estava sempre na academia? Porque queria malhar a asa!",
  "Comprei um óculos vermelho para VERMELHOR",
  "O que o passarinho falou para o passarinho? Nada, passarinho não fala!",
  "Por que o Batman colocou o batmóvel no seguro? Porque ele tem medo que robin.",
  "Você sabe qual a diferença entre a lagoa e a padaria? Na lagoa há sapinho, e na padaria, assa pão.",
  "O que o pagodeiro foi fazer na igreja? Cantar Pá God",
  "Ei, por que você não ligou o chuveiro? Porque esse xampu é para cabelos secos.",
  "Por que o gato ronrona? Porque ele não consegue miar!"
];

function generateJoke() {
  const jokeElement = document.getElementById("joke");
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeElement.textContent = jokes[randomIndex];
}

const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generateJoke);

// Gera uma piada aleatória ao carregar a página
generateJoke();
