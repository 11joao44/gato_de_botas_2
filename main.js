// Evento de observação de reload do DOM
document.addEventListener('DOMContentLoaded', function() {

    const trailer = document.querySelectorAll('[data-tab-trailer]')

// -- Adiciona uma classe ao item clicado -- //

    for (let i = 0; i < trailer.length; i++) {
        trailer[i].addEventListener('click', function(video) {
            const videoSelect = video.target.dataset.tabTrailer
            const play = document.querySelector(`[data-tab-id=${videoSelect}]`)
            ocultPlay()

            console.log(video)   
            play.classList.add('trailer__play__video--is-active')

            disableTrailer()
            video.target.classList.add('trailer__playlist__video--is-active')
        })
    }
})

//---------------------------------------------------------------------------------//

// -- Remove classe do itens não selecionados -- //

function disableTrailer() {
    const trailer = document.querySelectorAll('[data-tab-trailer]')

    for (let i = 0; i < trailer.length; i++) {
        trailer[i].classList.remove('trailer__playlist__video--is-active')
    }
}

function ocultPlay() {
    const playSelect = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < playSelect.length; i++) {
        playSelect[i].classList.remove('trailer__play__video--is-active')
    }
}

//-----------------------------------------------------------------------------//