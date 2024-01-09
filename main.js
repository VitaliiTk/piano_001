const keys = document.querySelectorAll('.key')
const volumeSlider = document.querySelector('#volume')
const checkBox = document.querySelector('#checkbox')

let keyPressed = false
let allWorkKeys = []
const audio = new Audio(`./sounds/a.wav`)

for (let i = 0; i < keys.length; i++) {
    allWorkKeys.push(keys[i].getAttribute('id'))
    keys[i].addEventListener('mousedown', (event) => {
        event.currentTarget.classList.add('active')
        playSound(event.currentTarget.getAttribute('id'))
    })
    keys[i].addEventListener('mouseup', (event) => {
        event.currentTarget.classList.remove('active')
    })
    keys[i].addEventListener('mouseout', (event) => {
        event.currentTarget.classList.remove('active')
    })
}
function playSound(keyName) {
    audio.src = `./sounds/${keyName}.wav`
    audio.play()
}

document.addEventListener('keydown', event => {
    if (allWorkKeys.includes(event.key)) {
        playSound(event.key)
        document.getElementById(event.key).classList.add('active')
    } else {
        console.log('another key');
    }
})
document.addEventListener('keyup', event => {
    if (allWorkKeys.includes(event.key)) {
        document.getElementById(event.key).classList.remove('active')
    }
})

function handleVolume(e) {
    audio.volume = e.target.value
}

volumeSlider.addEventListener('input', handleVolume)

const showHideKeys = () => {
    document.querySelectorAll('.key-wrapper span').forEach(element => {
        element.classList.toggle('display-none')
    })
}

checkBox.addEventListener('click', showHideKeys)