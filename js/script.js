$(document).ready(() => {
    //utilizando .html .css e .addClass
    $('.bola').addClass('sobre')
    $('.ir').addClass('sobre')
    $('#logo').html('<img src="img/bb.gif" alt="logo da empresa"></img>')
    $('#titulo').html('Dancing Baby').css({'font-family' : 'sans-serif', 'color' : 'white'})
    $('ul').addClass('menu')
    $('li').addClass('item')
    $('article').css({'font-family' : 'sans-serif', 'color' : 'white', 'line-height' : '25px'})
    $('#social').css({'height' : '50px'})
    $('#creditos').css({'background-color' : 'brown', 'padding' : '20px', 'border-radius' : '10px', 'margin' : '30px'})
    


    //eventos de mouse
    $('.b1').mousedown(() =>{
        $('.b1').html('yes baby, dancing!').removeClass('bola').addClass('quadrado')
    })
    $('.b1').mouseup(() =>{
        $('.b1').html('').removeClass('quadrado').addClass('bola')
    })
    $('.b3').click(() =>{
        $('.b3').html('yes baby, dancing!').removeClass('bola').addClass('quadrado')
    })
    $('.b4').dblclick(() =>{
        $('.b4').html('yes baby, dancing!').removeClass('bola').addClass('quadrado')
    })
    $('.b5').mousemove((e) =>{
        $('.b5').html('yes baby, dancing!').removeClass('bola').addClass('quadrado')
        $('#coordenadas').html('X: ' + e.offsetX + ' / Y: ' + e.offsetY)
    })
    $('.b6').mouseenter(() =>{
        $('.b6').html('yes baby, dancing!').removeClass('bola').addClass('quadrado')
    })
    $('.b6').mouseleave(() =>{
        $('.b6').html('').removeClass('quadrado').addClass('bola')
    })
    $('.b8').mouseover(() =>{
        $('.b8').html('yes baby, dancing!').removeClass('bola').addClass('quadrado')
    })
    
    $('.b9').mouseout(() =>{
        $('.b9').html('yes baby, dancing!').removeClass('bola').addClass('quadrado')
    })

    //adicionando elementos
    $('.antes').click(() =>{
        $('#tag').before('<h5 class="add">(opa! fui adicionado antes da tag)</h5>')
    })
    $('.inicio').click(() =>{
        $('#tag').prepend('<h5 class="add">(opa! fui adicionado no início da tag)</h5>')
    })
    $('.final').click(() =>{
        $('#tag').append('<h5 class="add">(opa! fui adicionado no final da tag)</h5>')
    })
    $('.depois').click(() =>{
        $('#tag').after('<h5 class="add">(opa! fui adicionado depois da tag)</h5>')
    })
    $('.limpar').click(() =>{
    $('.add').remove()
    })

    //eventos de teclado
    $('.f1').keydown(() =>{
        $('#piscar').attr('src', 'img/hk2.png')
    })
    $('.f1').keyup(() =>{
        $('#piscar').attr('src', 'img/hk1.png')
    })

    //show e hide
    $('.btn-showHide').mousedown(() =>{
        $('#teste').hide()
    })
    $('.btn-showHide').mouseup(() =>{
        $('#teste').show()
    })
    

})