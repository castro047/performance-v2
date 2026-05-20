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
    const cardAutomoveis = document.getElementById('servicoAutomoveis');
    const cardResidencial = document.getElementById('servicoResidencial');

    if (btnAgende) {
        btnAgende.addEventListener('click', function(e) {
            e.preventDefault();
            abrirWhatsApp('Olá! Tudo bem? Vim pelo site da clínica e gostaria de agendar uma avaliação estética personalizada. Podem me passar os horários disponíveis?');
        });
    }

    if (btnOrcamentoGratis) {
        btnOrcamentoGratis.addEventListener('click', function(e) {
            e.preventDefault();
            abrirWhatsApp('Olá! Gostaria de realizar uma avaliação estética e entender qual tratamento é mais indicado para o meu caso. Podem me ajudar?');
        });
    }

    if (cardAutomoveis) {
        cardAutomoveis.addEventListener('click', function() {
            abrirWhatsApp('Olá! Tenho interesse em procedimentos faciais. Gostaria de saber mais sobre limpeza de pele, harmonização, botox, preenchimento e protocolos personalizados.');
        });
    }

    if (cardResidencial) {
        cardResidencial.addEventListener('click', function() {
            abrirWhatsApp('Olá! Tenho interesse em tratamentos corporais. Gostaria de saber mais sobre protocolos para gordura localizada, celulite, flacidez e remodelação corporal.');
        });
    }

    /* CARROSSEL */

    const slide = document.querySelector('.slide');

    const imagensDesktop = [
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80',
        'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1600&q=80',
        'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1600&q=80'
    ];

    const imagensMobile = [
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=80'
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
