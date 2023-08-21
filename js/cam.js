const btnCamInit = document.querySelector('[data-video-botao]')
const fieldCam = document.querySelector('[data-camera]')
const video = document.querySelector('[data-video]')
const btnPhoto = document.querySelector('[data-tirar-foto]')
const canvas = document.querySelector('[data-video-canvas]')
const msg = document.querySelector('[data-mensagem]')
const btnSendPhoto = document.querySelector('[data-enviar]')

let imgURL = ""

btnCamInit.addEventListener('click', async function () {
    const playVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})

    btnCamInit.style.display = "none"
    fieldCam.style.display = "block"

    video.srcObject = playVideo
})

btnPhoto.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

    imgURL = canvas.toDataURL('imagem/jpeg')

    fieldCam.style.display = "none"
    msg.style.display = "block"
})

btnSendPhoto.addEventListener('click', () => {
    const receiveExistingData = localStorage.getItem("cadastro")
    const cvtReturn = JSON.parse(receiveExistingData)

    cvtReturn.imagem = imgURL

    localStorage.setItem("cadastro", JSON.stringify(cvtReturn))

    window.location.href = "./abrir-conta-form-3.html"
})