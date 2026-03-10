
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

reveals.forEach((item) => observer.observe(item));

document.querySelector('form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = this.querySelector('input[name="nome"]').value || 'Olá';
  const telefone = this.querySelector('input[name="telefone"]').value || '';
  const servico = this.querySelector('select[name="servico"]').value || '';
  const mensagem = this.querySelector('textarea[name="mensagem"]').value || '';
  const texto = `Olá! Meu nome é ${nome}. Telefone: ${telefone}. Serviço desejado: ${servico}. Mensagem: ${mensagem}`;
  window.open(`https://wa.me/5545988289384?text=${encodeURIComponent(texto)}`, '_blank');
});
