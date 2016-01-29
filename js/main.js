$(document).ready(function() {
    var texts=["Rude","No way no","Am i wrong","Carry on","Come Nights","We are Young (feat Janelle Monáe)","Counting star","Good life","Break a sweat","Rude","Love me hander","Animals","Un día sin sexo","Cosa imposibles","Mil horas"];
    var artistas=["Magic!","Magic!","Nico & Vinz","Fun","Fun","Fun","One Republic","One Republic","Becky G","Magic!","Ariana Grande","Marron 5","Mar de copas","Gustavo Cerati","Los abuelos de la nada"];
    
    $( ".wrapper" ).css( 'height',$( window ).height() );
    $( ".cuerpo" ).css( 'width',$( window ).width()-203 );
    $( ".home" ).css( 'width',$( window ).width()-220 );
    
    
    $( ".infoAlbum" ).css( 'width',$( ".cuerpo" ).width()-290 );
    
    function llenaTexto(idt){
        $(".cabAlbum h1").html(texts[idt-1]);
        $(".cabAlbum h2").html(artistas[idt-1]);
//        console.log("llena texto: "+idt);
        TweenMax.to($(".cabAlbum h1"), 0.3, { alpha:1});
        TweenMax.to($(".cabAlbum h2"), 0.3, { alpha:1});
    }
    
    function Foto(contenido){
        var img = document.createElement('img');
        img.setAttribute('src', contenido);
        img.addEventListener('load', function() {
            var vibrant = new Vibrant(img);
            var swatches = vibrant.swatches();
            for (var swatch in swatches){
                if (swatches.hasOwnProperty(swatch) && swatches[swatch]){
//                    console.log(swatch, swatches[swatch].getHex())
                }
            }
//            console.log(swatches['Vibrant'].getHex());
            TweenMax.to($(".cabAlbum"), 0.5, {backgroundColor:swatches['DarkVibrant'].getHex()});
            
//            $(".cabAlbum").css('background',swatches['DarkVibrant'].getHex());
            $(".cabAlbum").css('color',swatches['LightVibrant'].getHex());
            $(".cabAlbum h2").css('color',swatches['LightVibrant'].getHex());
            $(".cabAlbum .detalles").css('color',swatches['LightVibrant'].getHex());
        });
    }
    
    
    
    var foto = new Foto($(".conteFoto>img").attr("src"));
    for(var i=1;i<=15;i++){
        
        //console.log("listado: " + $(".table>tbody>#fila"+i+">td>.namePlay").attr('id'));
        
        $(".table>tbody>#fila"+i+">td>.namePlay").click(function(){
            var IDs = $(this).attr('id');
//            console.log(IDs);
            TweenMax.to($(".conteFoto>img"), 0, { alpha:0});
            TweenMax.to($(".cabAlbum h1"), 0.3, { alpha:0, onComplete:llenaTexto, onCompleteParams:[IDs]});
            TweenMax.to($(".cabAlbum h2"), 0.3, { alpha:0});
            
            $(".conteFoto>img").attr("src","img/250x250_"+IDs+".jpg");
            TweenMax.to($(".conteFoto>img"), 0.5, { alpha:1,delay:0.2});
//            TweenMax.from($(".conteFoto>img"), 0.5, { scaleX:0.8,scaleY:0.8,delay:0.2});
            
            var foto = new Foto($(".conteFoto>img").attr("src"));
            
        });
    }
    
    /*$(".menu .btnAlbumes").click(function(){
        console.log('BOTON ALBUMES');
        listaAlbumes();
    });*/
    
    listaAlbumes();
    
    $('#myModal').on('show.bs.modal', function (e) {
        TweenMax.to($(".modal .menu2"), 0.3, {left:0});
    })    
    $('#myModal').on('hide.bs.modal', function (e) {
        TweenMax.to($(".modal .menu2"), 0.3, {left:-300});
    })
});


$( window ).resize(function() {
    $( ".wrapper" ).css( 'height',$( window ).height() );
    $( ".cuerpo" ).css( 'width',$( window ).width()-220 );
    $( ".home" ).css( 'width',$( window ).width()-220 );
    
    $( ".infoAlbum" ).css( 'width',$( ".cuerpo" ).width()-290 );
});


function listaAlbumes(){
    console.log('LISTADO DE ALBUMES');
    $.getJSON( "json/data.json", function( data ) {
        var alb = [];
        var art = [];
        var cov = [];
        
        $.each(data, function(key, val) {


            for (var i = 0; i < val.length; i++) {
                alb.push(val[i].album.Nombre);
                art.push(val[i].album.Artista);
                cov.push(val[i].album.Cover);
                
            }

        });

        
        console.log(alb);
        
        
        for(var j=0;j<alb.length;j++){
            var contenedor = document.getElementsByClassName("listAlbum")[0];
            var albumItem = document.createElement("a");
            albumItem.setAttribute("class", "btnAlbum");

            var imgFoto = document.createElement("img");
            imgFoto.setAttribute("src", cov[j]);
            imgFoto.setAttribute("class", "fotoCover");

            var pAlbum = document.createElement("p");
            pAlbum.setAttribute("class", "Talbum");
            pAlbum.setAttribute("id", "albId_"+j);

            var pArtista = document.createElement("p");
            pArtista.setAttribute("class", "Tartista");
            pArtista.setAttribute("id", "artId_"+j);

            var divHover = document.createElement("div");
            divHover.setAttribute("class", "playHover");

            albumItem.appendChild(imgFoto);
            albumItem.appendChild(pAlbum);
            albumItem.appendChild(pArtista);
            albumItem.appendChild(divHover);

            contenedor.appendChild(albumItem);

            $('.btnAlbum #albId_'+j).html(alb[j]);
            $('.btnAlbum #artId_'+j).html(art[j]);
            
        }
        
    });
}