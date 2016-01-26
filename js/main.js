$(document).ready(function() {
    
    $( ".wrapper" ).css( 'height',$( window ).height() );
    $( ".cuerpo" ).css( 'width',$( window ).width()-220 );
    
    
    $( ".infoAlbum" ).css( 'width',$( ".cuerpo" ).width()-290 );
    
    var img = document.createElement('img');
    img.setAttribute('src', 'img/250x250.jpg');

    img.addEventListener('load', function() {
        console.log("inicia la carga");
        var vibrant = new Vibrant(img);
        var swatches = vibrant.swatches()
        for (var swatch in swatches)
            if (swatches.hasOwnProperty(swatch) && swatches[swatch])
                console.log(swatch, swatches[swatch].getHex())

                /*
     * Results into:
     * Vibrant #7a4426
     * Muted #7b9eae
     * DarkVibrant #348945
     * DarkMuted #141414
     * LightVibrant #f3ccb4
     */
                console.log(swatches['Muted'].getHex());
        $(".cabAlbum").css('background',swatches['Muted'].getHex())
        $(".cabAlbum").css('color',swatches['DarkVibrant'].getHex())
        $(".cabAlbum h2").css('color',swatches['DarkVibrant'].getHex())
        $(".cabAlbum .detalles").css('color',swatches['DarkVibrant'].getHex())
//        $(".cabAlbum").css("background-image","img/250x250.jpg");
                });
    

});
$( window ).resize(function() {
    $( ".wrapper" ).css( 'height',$( window ).height() );
    $( ".cuerpo" ).css( 'width',$( window ).width()-220 );
    
    $( ".infoAlbum" ).css( 'width',$( ".cuerpo" ).width()-290 );
});