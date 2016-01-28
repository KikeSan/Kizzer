$(document).ready(function() {
    var texts=["Rude","No way no","Am i wrong","Carry on","Come Nights","We are Young (feat Janelle Monáe)","Counting star","Good life","Break a sweat","Rude","Love me hander","Animals","Un día sin sexo","Cosa imposibles","Mil horas"];
    var artistas=["Magic!","Magic!","Nico & Vinz","Fun","Fun","Fun","One Republic","One Republic","Becky G","Magic!","Ariana Grande","Marron 5","Mar de copas","Gustavo Cerati","Los abuelos de la nada"];
    
    $( ".wrapper" ).css( 'height',$( window ).height() );
    $( ".cuerpo" ).css( 'width',$( window ).width()-203 );
    
    
    $( ".infoAlbum" ).css( 'width',$( ".cuerpo" ).width()-290 );
    
    /*var img = document.createElement('img');
    img.setAttribute('src', 'img/250x250.jpg');

    img.addEventListener('load', function() {
        console.log("inicia la carga");
        var vibrant = new Vibrant(img);
        var swatches = vibrant.swatches()
        for (var swatch in swatches)
            if (swatches.hasOwnProperty(swatch) && swatches[swatch])
                console.log(swatch, swatches[swatch].getHex())

                
     * Results into:
     * Vibrant #7a4426
     * Muted #7b9eae
     * DarkVibrant #348945
     * DarkMuted #141414
     * LightVibrant #f3ccb4
     
                console.log(swatches['Muted'].getHex());
        $(".cabAlbum").css('background',swatches['DarkVibrant'].getHex())
        $(".cabAlbum").css('color',swatches['LightVibrant'].getHex())
        $(".cabAlbum h2").css('color',swatches['LightVibrant'].getHex())
        $(".cabAlbum .detalles").css('color',swatches['LightVibrant'].getHex())
    });*/
    
    function llenaTexto(idt){
        $(".cabAlbum h1").html(texts[idt-1]);
        $(".cabAlbum h2").html(artistas[idt-1]);
        console.log("llena texto: "+idt);
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
            console.log(IDs);
            TweenMax.to($(".conteFoto>img"), 0, { alpha:0});
            TweenMax.to($(".cabAlbum h1"), 0.3, { alpha:0, onComplete:llenaTexto, onCompleteParams:[IDs]});
            TweenMax.to($(".cabAlbum h2"), 0.3, { alpha:0});
            
            $(".conteFoto>img").attr("src","img/250x250_"+IDs+".jpg");
            TweenMax.to($(".conteFoto>img"), 0.5, { alpha:1,delay:0.2});
//            TweenMax.from($(".conteFoto>img"), 0.5, { scaleX:0.8,scaleY:0.8,delay:0.2});
            
            var foto = new Foto($(".conteFoto>img").attr("src"));
            
        });
    }
    
});
$( window ).resize(function() {
    $( ".wrapper" ).css( 'height',$( window ).height() );
    $( ".cuerpo" ).css( 'width',$( window ).width()-220 );
    
    $( ".infoAlbum" ).css( 'width',$( ".cuerpo" ).width()-290 );
});