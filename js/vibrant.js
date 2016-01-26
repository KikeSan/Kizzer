$(document).ready(function() {
    
/*        var img = document.createElement('img');
        img.setAttribute('src', $("#foto_0>img").attr("src"));
        img.addEventListener('load', function() {
            var vibrant = new Vibrant(img);
            var swatches = vibrant.swatches();
            for (var swatch in swatches){
                if (swatches.hasOwnProperty(swatch) && swatches[swatch]){console.log(swatch, swatches[swatch].getHex())}
            }
            $("#foto_0").css('background',swatches['Vibrant'].getHex());
            $("#foto_0>.colores>ul>.Vibrant").css('background',swatches['Vibrant'].getHex());
            $("#foto_0>.colores>ul>.Muted").css('background',swatches['Muted'].getHex());
            $("#foto_0>.colores>ul>.DarkVibrant").css('background',swatches['DarkVibrant'].getHex());
            $("#foto_0>.colores>ul>.DarkMuted").css('background',swatches['DarkMuted'].getHex());
            $("#foto_0>.colores>ul>.LightVibrant").css('background',swatches['LightVibrant'].getHex());
        });*/
        
    
    
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
            $(target).css('background',swatches['Vibrant'].getHex());
            $(target+">.colores>ul>.Vibrant").css('background',swatches['Vibrant'].getHex());
            $(target+">.colores>ul>.Muted").css('background',swatches['Muted'].getHex());
            $(target+">.colores>ul>.DarkVibrant").css('background',swatches['DarkVibrant'].getHex());
            $(target+">.colores>ul>.DarkMuted").css('background',swatches['DarkMuted'].getHex());
            $(target+">.colores>ul>.LightVibrant").css('background',swatches['LightVibrant'].getHex());
        });
    }
    
    for(var i=0;i<=8;i++){
        var foto = new Foto($("#foto_"+i+">img").attr("src"),"#foto_"+i);
    }
    /*var foto0 = new Foto($("#foto_0>img").attr("src"),"#foto_0");
    var foto1 = new Foto($("#foto_1>img").attr("src"),"#foto_1");
    var foto2 = new Foto($("#foto_2>img").attr("src"),"#foto_2");*/
});