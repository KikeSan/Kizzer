$(document).ready(function() {
    
    function Foto(contenido,target){
        var img = document.createElement('img');
        img.setAttribute('src', contenido);
        img.addEventListener('load', function() {
            var vibrant = new Vibrant(img);
            var swatches = vibrant.swatches();
            for (var swatch in swatches){
                if (swatches.hasOwnProperty(swatch) && swatches[swatch]){console.log(swatch, swatches[swatch].getHex())}
            }
            console.log(swatches['Vibrant'].getHex());
            $(target).css('background',swatches['DarkVibrant'].getHex());
            $(target+">.colores>ul>li>p").css('color',swatches['LightVibrant'].getHex());
            $(target+">.colores>ul>.Vibrant").css('background',swatches['Vibrant'].getHex());
            $(target+">.colores>ul>.Muted").css('background',swatches['Muted'].getHex());
            $(target+">.colores>ul>.DarkVibrant").css('background',swatches['DarkVibrant'].getHex());
            $(target+">.colores>ul>.DarkMuted").css('background',swatches['DarkMuted'].getHex());
            $(target+">.colores>ul>.LightVibrant").css('background',swatches['LightVibrant'].getHex());
        });
    }
    
    for(var i=0;i<=13;i++){
        var foto = new Foto($("#foto_"+i+">img").attr("src"),"#foto_"+i);
    }
});