document.addEventListener('DOMContentLoaded', () => {
    let candle = document.querySelector('.candle_img')
    let div_candle = document.querySelector('.candle')
    let triggerSound = new Audio("blast_sound.WAV")
    let triggerSound2 = new Audio("mel_sound.mp3")
    let triggerSound3 = new Audio("sh.mp3")
    let uk = document.querySelector('.uk_image')
    let portugal = document.querySelector('.portugal_image')
    let enter = document.querySelector('.school')
    let snake_shh = document.querySelector('.snake')
    let money_move = document.querySelector('.money') 
    let mel_move = document.querySelector('.div_new') 
    let draggable = false
    let isLinked = false
    let offsetX = 0
    function playTriggerSound() {
        triggerSound.play()
    }
    function playTriggerSound2() {
        triggerSound2.play()
    }
    function playTriggerSound3() {
        triggerSound3.play()
    }
    function linkedToParent() {
        let shouldBeLinked = mel_move.getBoundingClientRect().left < money_move.getBoundingClientRect().right - 300
        if (shouldBeLinked) {
            console.log('yes')
            isLinked = true
        }
    }
    candle.addEventListener('click', (e) => {
        candle.src = "assets/blast.svg"
        candle.style.width = '25vw'
        div_candle.style.top = '16vw'
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
    enter.addEventListener('click', (e) => {
        let enter_p = document.querySelector('.enter')
        enter_p.style.display = 'inline'
    })
    enter.addEventListener('click', () => {
        let money_img = document.querySelector('.money')
        money_img.style.display = 'inline'
    })
    money_move.addEventListener('pointerdown', (e) => {
        draggable = true
        money_move.style.left = `${e.clientX - money_move.getBoundingClientRect().width / 2}px`
        console.log('haha')
        let rect = money_move.getBoundingClientRect()
        offsetX = e.clientX - rect.left
    })
    money_move.addEventListener('pointermove', (e) => {
        if (draggable) {
            let rect = money_move.getBoundingClientRect()
            let maxLeft = window.innerWidth - rect.width
            let desiredLeft = e.clientX - offsetX
            let clampedLeft = Math.min(Math.max(desiredLeft, 0), maxLeft)
            money_move.style.left = `${clampedLeft}px` 
            linkedToParent()
            if (isLinked) {
                money_move.style.display = 'none'
                playTriggerSound2()
                let p = document.querySelector('.enter')
                p.textContent = 'Добро пожаловать!'
                let enter_p2 = document.querySelector('.enter_none')
                enter_p2.style.display = 'inline'
            }
        }
    })
    document.addEventListener('pointerup', () => {
        draggable = false
    })
    snake_shh.addEventListener('click', () => {
        let snake_shhh = document.querySelector('.snake_sh')
        snake_shhh.style.display = 'inline'
        playTriggerSound3()
    })
})