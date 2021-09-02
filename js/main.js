/*toda vez q tiver o $ é referência ao jQuery. O modelo abaixo foi tirado do site owlcarousel modelo básico */ 
$('.owl-carousel').owlCarousel({
    loop:true, /*navegação lateral de forma infinita. Se false, para no último */
    margin:10, /*espaço entre uma img e outra*/
    nav:true, /*menuzinho com seta em baixo para movimentar para os lados */ 
    responsive:{  /*responsividade e quantidade de itens mostrando de acordo com os px definidos*/ 
        0:{   //px baixo: 1 imagem
            items:1
        },
        600:{    //px de 600: 3 imagens
            items:3
        },
        1000:{
            items:5
        }
    }
})