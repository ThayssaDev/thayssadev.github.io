// ===== MENU NO CELULAR =====
const menuBotao = document.querySelector('.menu-botao');
const menu = document.querySelector('.menu');

menuBotao.addEventListener('click', function () {
    menu.classList.toggle('aberto'); // mostra ou esconde o menu
    const aberto = menu.classList.contains('aberto');
    menuBotao.setAttribute('aria-expanded', aberto);
});

// fecha o menu quando clica em um link
document.querySelectorAll('.menu a').forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.remove('aberto');
        menuBotao.setAttribute('aria-expanded', false);
    });
});

// ===== ANO AUTOMÁTICO NO RODAPÉ =====
document.getElementById('ano').textContent = new Date().getFullYear();

// ===== SEÇÕES APARECEM AO ROLAR A PÁGINA =====
const elementos = document.querySelectorAll('.secao__titulo, .sobre__texto, .habilidades, .projeto, .contato p');

elementos.forEach(function (elemento) {
    elemento.classList.add('aparecer');
});

const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
            observador.unobserve(entrada.target); // anima só uma vez
        }
    });
}, { threshold: 0.15 });

elementos.forEach(function (elemento) {
    observador.observe(elemento);
});

// ===== E-MAIL: ABRE O APLICATIVO E TAMBÉM COPIA O ENDEREÇO =====
const linkEmail = document.getElementById('link-email');
const aviso = document.getElementById('aviso');
const email = 'thayssa18ro@gmail.com';

linkEmail.addEventListener('click', function () {
    // copia o e-mail, para o caso de o computador não ter um aplicativo de e-mail configurado
    if (navigator.clipboard) {
        navigator.clipboard.writeText(email).catch(function () {});
    }
    aviso.textContent = 'E-mail copiado: ' + email;
    aviso.hidden = false;
    setTimeout(function () {
        aviso.hidden = true;
    }, 3500);
});
