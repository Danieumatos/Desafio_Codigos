document.addEventListener('DOMContentLoaded', function () {
  const background = document.getElementById('background');
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    background.appendChild(particle);
    resetParticle(particle);
  }
});

function resetParticle(particle) {
  particle.style.top = 100 + Math.random() * (window.innerHeight - 200) + 'px'; // Aparece em um ponto randômico verticalmente
  particle.style.left = -50 + Math.random() * (window.innerWidth - 100) + 'px'; // Aparece fora da tela à esquerda
  const moveDuration = 5 + Math.random() * 5; // Duração entre 5 e 10 segundos
  particle.style.animationDuration = moveDuration + 's';
  particle.style.animationDelay = '-' + Math.random() * moveDuration + 's';

  particle.addEventListener('animationend', function () {
    resetParticle(particle);
  });
}

function irParaLicao(url) {
  window.location.href = url;
}

function irParaModoDesafio() {
  document.getElementById('menu-container').style.display = 'none';
  document.getElementById('desafio-container').style.display = 'block';
}

function irParaDesafio(dificuldade) {
  if (dificuldade === 'facil') {
    window.location.href = 'desafio1.html'; // Navega para o desafio fácil
  } else if (dificuldade === 'medio') {
    window.location.href = 'desafio2.html'; // Navega para o desafio médio
  } else if (dificuldade === 'dificil') {
    window.location.href = 'desafio3.html'; // Navega para o desafio difícil (quando disponível)
  } else {
    alert('Dificuldade não reconhecida');
  }
}
