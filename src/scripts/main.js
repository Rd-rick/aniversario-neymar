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

        const horasMs = 1000 * 60 * 60;
        const minutosMs = 1000 * 60;
        const segundosMs = 1000;

        const horas = Math.floor((aniversario % (24 * horasMs)) / horasMs);
        const minutos = Math.floor((aniversario % horasMs) / minutosMs);
        const segundos = Math.floor((aniversario % minutosMs) / 1000);

        return { aniversario, meses, dias, horas, minutos, segundos };
    }

    const intervalo = setInterval(function() {
        const tempoRestante = calcularTempoRestante();

        document.getElementById('contador').innerHTML = 
            `${tempoRestante.meses}m ${tempoRestante.dias}d ${tempoRestante.horas}h ${tempoRestante.minutos}m ${tempoRestante.segundos}s`;

        if (tempoRestante.aniversario < 0) {
            clearInterval(intervalo);
            document.querySelector('.date__contador__item').innerHTML = 'Hoje é o aniversário do Neymar!';
        }
    }, 1000);

    
    const abrePresente = document.getElementById('abre-presente');

    abrePresente.addEventListener('click', function(e) {
        e.preventDefault()

        const tempoRestante = calcularTempoRestante(); 

        if (tempoRestante.aniversario < 0) {
            abrirPresente(); 
        } else {
            abrePresente.innerHTML = 'Volte no aniversário do Neymar!';
            setTimeout(() => {
                abrePresente.innerHTML = 'Abrir Presente';
            }, 2000);
        }
    });

    function abrirPresente() { 
        let mensagem = `<div class="container">` 
        mensagem += `<img class="mensagem__foto" src="/neymar.c0330475.png" alt="Neymar">` 
        mensagem += `<h2 class="mensagem__title"><b>Parabéns Neymar</b></h2>` 
        mensagem += `<p class="mensagem__parabens">` 
        mensagem += `Que seu dia seja tão brilhante quanto seus dribles e suas jogadas mágicas! Você é uma inspiração para milhões de fãs ao redor do mundo, e seu talento continua encantando o futebol. Que este novo ciclo traga ainda mais conquistas, alegria e saúde para você. Parabéns, craque! ⚽💙💛💚 #NeyDay #FelizAniversárioNeymar` 
        mensagem += `</p>` 
        mensagem += `</div>` 

        presente.innerHTML = mensagem }
});
