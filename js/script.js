document.addEventListener('DOMContentLoaded', function () {

    const numero = '5547997327311';

    function abrirWhatsApp(mensagem) {
        const texto = encodeURIComponent(mensagem);
        window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
    }

    /* MENU MOBILE */

    const logoMenu = document.getElementById('logoMenu');
    const menu = document.getElementById('menu');

    if (logoMenu && menu) {
        logoMenu.addEventListener('click', function (e) {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                menu.classList.toggle('active');
            }
        });
    }

    const linksMenu = document.querySelectorAll('#menu a');

    linksMenu.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 900 && menu) {
                menu.classList.remove('active');
            }
        });
    });

    /* WHATSAPP */

    const btnAgende = document.getElementById('servicoautomoveis');
    const btnOrcamentoGratis = document.getElementById('btnOrcamentoGratis');
    const cardClareamento = document.getElementById('servicoClareamento');
    const cardImplantes = document.getElementById('servicoImplantes');

    if (btnAgende) {
        btnAgende.addEventListener('click', function(e) {
            e.preventDefault();
            abrirWhatsApp('Olá! Gostaria de agendar uma avaliação odontológica.');
        });
    }

    if (btnOrcamentoGratis) {
        btnOrcamentoGratis.addEventListener('click', function(e) {
            e.preventDefault();
            abrirWhatsApp('Olá! Gostaria de solicitar uma avaliação para tratamento odontológico.');
        });
    }

    if (cardClareamento) {
        cardClareamento.addEventListener('click', function() {
            abrirWhatsApp('Olá! Gostaria de mais informações sobre clareamento dental.');
        });
    }

    if (cardImplantes) {
        cardImplantes.addEventListener('click', function() {
            abrirWhatsApp('Olá! Gostaria de mais informações sobre implantes dentários.');
        });
    }

    /* CARROSSEL */

    const slide = document.querySelector('.slide');

    const imagensDesktop = [
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1600&q=80',
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80',
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80'
    ];

    const imagensMobile = [
        'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=900&q=80'
    ];

    let imagemAtual = 0;

    function imagensAtuais() {
        return window.innerWidth <= 500 ? imagensMobile : imagensDesktop;
    }

    function trocarImagem() {
        if (!slide) return;

        const imagens = imagensAtuais();

        if (imagemAtual >= imagens.length) {
            imagemAtual = 0;
        }

        slide.style.opacity = "0.82";

        setTimeout(function() {
            slide.style.backgroundImage = `url("${imagens[imagemAtual]}")`;
            slide.style.opacity = "1";
        }, 250);
    }

    function iniciarCarrossel() {
        trocarImagem();

        setInterval(function() {
            imagemAtual++;
            trocarImagem();
        }, 4500);
    }

    window.addEventListener('resize', function() {
        imagemAtual = 0;
        trocarImagem();
    });

    iniciarCarrossel();

});