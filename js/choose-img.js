const profileWrap = document.querySelector('.shift')
        fileInput = document.querySelector('.file__input')
        imgProfile = document.querySelector('.profile__image')
        profileLabel = document.querySelector('.profile__label')
fileInput.addEventListener('change', function(){
    const choosedFile = this.files[0]
    if(choosedFile){
        const reader = new FileReader()

        reader.addEventListener('load', function(){
            imgProfile.setAttribute('src', reader.result)
        })
        reader.readAsDataURL(choosedFile)
    }
})