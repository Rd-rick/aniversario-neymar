const presente = document.querySelector('.mensagem');
document.addEventListener('DOMContentLoaded', function() {
    const dataAniversario = new Date('02/05/2026 00:00:00');
    const dataStampAniversario = dataAniversario.getTime();
    function calcularTempoRestante() {
        const dataAtual = new Date();
        const dataStampAtual = dataAtual.getTime();
        const aniversario = dataStampAniversario - dataStampAtual;
        const anoAtual = dataAtual.getFullYear();
        const mesAtual = dataAtual.getMonth();
        const diaAtual = dataAtual.getDate();
        const anoAniversario = dataAniversario.getFullYear();
        const mesAniversario = dataAniversario.getMonth();
        const diaAniversario = dataAniversario.getDate();
        let meses = (anoAniversario - anoAtual) * 12 + (mesAniversario - mesAtual);
        let dias = diaAniversario - diaAtual;
        if (dias < 0) {
            meses--;
            const ultimoDiaMesAnterior = new Date(anoAniversario, mesAniversario, 0).getDate();
            dias += ultimoDiaMesAnterior;
        }
        const horasMs = 3600000;
        const minutosMs = 60000;
        const segundosMs = 1000;
        const horas = Math.floor(aniversario % (24 * horasMs) / horasMs);
        const minutos = Math.floor(aniversario % horasMs / minutosMs);
        const segundos = Math.floor(aniversario % minutosMs / 1000);
        return {
            aniversario,
            meses,
            dias,
            horas,
            minutos,
            segundos
        };
    }
    const intervalo = setInterval(function() {
        const tempoRestante = calcularTempoRestante();
        document.getElementById('contador').innerHTML = `${tempoRestante.meses}m ${tempoRestante.dias}d ${tempoRestante.horas}h ${tempoRestante.minutos}m ${tempoRestante.segundos}s`;
        if (tempoRestante.aniversario < 0) {
            clearInterval(intervalo);
            document.querySelector('.date__contador__item').innerHTML = "Hoje \xe9 o anivers\xe1rio do Neymar!";
        }
    }, 1000);
    const abrePresente = document.getElementById('abre-presente');
    abrePresente.addEventListener('click', function(e) {
        e.preventDefault();
        const tempoRestante = calcularTempoRestante();
        if (tempoRestante.aniversario < 0) abrirPresente();
        else {
            abrePresente.innerHTML = "Volte no anivers\xe1rio do Neymar!";
            setTimeout(()=>{
                abrePresente.innerHTML = 'Abrir Presente';
            }, 2000);
        }
    });
    function abrirPresente() {
        let mensagem = `<div class="container">`;
        mensagem += `<img class="mensagem__foto" src="/neymar.c0330475.png" alt="Neymar">`;
        mensagem += `<h2 class="mensagem__title"><b>Parab\xe9ns Neymar</b></h2>`;
        mensagem += `<p class="mensagem__parabens">`;
        mensagem += `Que seu dia seja t\xe3o brilhante quanto seus dribles e suas jogadas m\xe1gicas! Voc\xea \xe9 uma inspira\xe7\xe3o para milh\xf5es de f\xe3s ao redor do mundo, e seu talento continua encantando o futebol. Que este novo ciclo traga ainda mais conquistas, alegria e sa\xfade para voc\xea. Parab\xe9ns, craque! \u{26BD}\u{1F499}\u{1F49B}\u{1F49A} #NeyDay #FelizAnivers\xe1rioNeymar`;
        mensagem += `</p>`;
        mensagem += `</div>`;
        presente.innerHTML = mensagem;
    }
});

//# sourceMappingURL=aniversario.8ec8d9d5.js.map
