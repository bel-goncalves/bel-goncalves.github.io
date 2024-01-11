// scroll
const links = document.querySelectorAll(".header-menu a");

function descer(event){

    event.preventDefault();

    const link = event.currentTarget;
    const idSecao = link.getAttribute("href").substring(1); // Remove o "#" do href
    const secaoAlvo = document.getElementById(idSecao);

    if(secaoAlvo){

        const posicao = secaoAlvo.offsetTop;

        window.scrollTo({
            top: posicao,
            behavior: 'smooth'
        });
    }
}

function eventoDescer(link){
    link.addEventListener("click", descer);
}

links.forEach(eventoDescer);