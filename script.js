function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    //Seleciona a tag img
    const img = document.querySelector('#profile img')


           //Substituir a img
     if(html.classList.contains("light")) {   
          //se tiver a class light, adicionar imagem light
        img.setAttribute("src","./assets/avatarLight.png")
          //altera o alt caso tenha a class light
        img.setAttribute("alt", "Sem imagem de perfil")
  
     } else{
            //ou se tiver sem light mode, manter a imagem normal
       img.setAttribute("src", "./assets/avatar.png")
            //altera o alt caso não tenha a class light
       img.setAttribute("alt", "Foto perfil felipe")
     }
}