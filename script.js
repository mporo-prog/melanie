document.addEventListener('DOMContentLoaded', () => {
    let candle = document.querySelector('.candle_img')
    let div_candle = document.querySelector('.candle')
    let triggerSound = new Audio("blast_sound.WAV")
    let uk = document.querySelector('.uk_image')
    let portugal = document.querySelector('.portugal_image')
    let russia = document.querySelector('.russia_image')
    function playTriggerSound() {
        triggerSound.play()
    }
    candle.addEventListener('click', (e) => {
        let rect = div_candle.getBoundingClientRect()
        candle.src = "assets/blast.svg"
        candle.style.width = '25vw'
        div_candle.style.top = `${rect.top + 100}px`
        div_candle.style.left = '0px'
        playTriggerSound()
    })
    uk.addEventListener('click', (e) => {
        let uk_p = document.querySelector('.uk')
        uk_p.style.display = 'inline'
    })
    portugal.addEventListener('click', (e) => {
        let portugal_p = document.querySelector('.portugal')
        portugal_p.style.display = 'inline'
    })
    russia.addEventListener('click', (e) => {
        let russia_p = document.querySelector('.russia')
        russia_p.style.display = 'inline'
    })
})