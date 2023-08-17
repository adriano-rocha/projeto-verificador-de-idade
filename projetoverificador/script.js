function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       let fsex = document.getElementsByName('radsex')
       let idade = ano - Number(fano.value)
       let genero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       if (idade >=0 && idade < 10) {
        //criança
        img.setAttribute('src', 'menino-crianca.png')
       }else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'homen-jovem.png')
       } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'homem.png')
       } else {
        //Idoso
        img.setAttribute('src', 'homem-maduro.png')
        
       }
       if (fsex[0].checked) {
        genero = 'Homem'
    }  else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade < 10) {
            //criança
            img.setAttribute('src', 'menina-crianca.png')
           }else if (idade < 21) {
            //jovem
            img.setAttribute('src', ',mulher-jovem.png')
           } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'mulher.png')
           } else {
            //Idoso
            img.setAttribute('src', 'mulher-madura.png')
           } 
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)

  }


}