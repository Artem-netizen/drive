let video = document.querySelector('.video__item')
let videoLoading = document.querySelector('.loading__circle')

// video.forEach((play) =>{
//     play.addEventListener('click', (e) =>{
//         videoLoading.classList.add('work')
//     })
// })
video.addEventListener('play', e => {
    videoLoading.style.display = 'block'
})



video.addEventListener('pause', e => остановитьКруг())