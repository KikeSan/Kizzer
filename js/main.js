$(document).ready(function() {
    var texts=["Rude","No way no","Am i wrong","Carry on","Come Nights","We are Young (feat Janelle Monáe)","Counting star","Good life","Break a sweat","Rude","Love me hander","Animals","Un día sin sexo","Cosa imposibles","Mil horas"];
    var artistas=["Magic!","Magic!","Nico & Vinz","Fun","Fun","Fun","One Republic","One Republic","Becky G","Magic!","Ariana Grande","Marron 5","Mar de copas","Gustavo Cerati","Los abuelos de la nada"];
    
    $( ".wrapper" ).css( 'height',$( window ).height() );
    $( ".cuerpo" ).css( 'width',$( window ).width()-204 );
    $( ".home" ).css( 'width',$( window ).width()-220 );
    
    $( ".infoAlbum" ).css( 'width',$( ".cuerpo" ).width()-290 );
    
    
    $( ".playlistHome>.itemList>.opciones>.opc" ).css( 'width',$( ".playlistHome>.itemList>.opciones>img" ).width() );
    $( ".playlistHome>.itemList>.opciones>.opc" ).css( 'height',$( ".playlistHome>.itemList>.opciones>img" ).height() );
    
    
    
    
    
    
    
    
//    var foto = new Foto($(".conteFoto>img").attr("src"));
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
    
    $( ".playlistHome>.itemList>.opciones>.opc" ).css( 'width',$( ".playlistHome>.itemList>.opciones>img" ).width() );
    $( ".playlistHome>.itemList>.opciones>.opc" ).css( 'height',$( ".playlistHome>.itemList>.opciones>img" ).height() );
});


var alb = [];
var art = [];
var cov = [];
var listaCanciones = [];
function listaAlbumes(){
    //console.log('LISTADO DE ALBUMES');
    $.getJSON( "json/data.json", function( data ) {
        $.each(data, function(key, val) {
            for (var i = 0; i < val.length; i++) {
                alb.push(val[i].album.Nombre);
                art.push(val[i].album.Artista);
                cov.push(val[i].album.Cover);
                listaCanciones.push(val[i].album.lista);
            }
        });
        //console.log(alb);
        for(var j=0;j<alb.length;j++){
            var contenedor = document.getElementsByClassName("listAlbum")[0];
            var albumItem = document.createElement("a");
            albumItem.setAttribute("class", "btnAlbum");
            albumItem.setAttribute("id", j);

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
            
            $('#'+j).click(function(){
                muestraAlbum($(this).attr('id'));
            })
        }
    });
}

function llenaTexto(idt){
    $(".cabAlbum h1").html(alb[idt]);
    $(".cabAlbum h2").html(art[idt]);
    TweenMax.to($(".cabAlbum h1"), 0.3, { alpha:1});
    TweenMax.to($(".cabAlbum h2"), 0.3, { alpha:1});
}

function Foto(contenido){
    $(".conteFoto>img").attr("src",contenido);
    $(".menu>.cancion>.fotoAlbum>img").attr("src",contenido);
    
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

        $(".cabAlbum").css('color',swatches['LightVibrant'].getHex());
        $(".cabAlbum h2").css('color',swatches['LightVibrant'].getHex());
        $(".cabAlbum .detalles").css('color',swatches['LightVibrant'].getHex());
    });
}

function muestraAlbum(idA){
    console.log(idA);
    $(".home").css({'display':'none'});
    $(".cuerpo").css({'display':'block'});
        
    TweenMax.to($(".conteFoto>img"), 0, { alpha:0});
    TweenMax.to($(".cabAlbum h1"), 0.3, { alpha:0, onComplete:llenaTexto, onCompleteParams:[idA]});
    TweenMax.to($(".cabAlbum h2"), 0.3, { alpha:0});
    
    TweenMax.to($(".conteFoto>img"), 0.5, { alpha:1,delay:0.2});
    
    var foto = new Foto('img/album_'+idA+'.jpg');
    
    llenaCanciones(idA);
    
    $('#myModal').modal('hide');
}


function llenaCanciones(idAlbum){
    
    var contenCancion = $('table>tbody');
    contenCancion.empty();
    /*for(var z=0;$('table>tbody').length-1; z++){
        $('table>tbody').remove( "#fila"+z );
    }*/
    
    var trCab = document.createElement("tr");
    trCab.setAttribute("class", "cabecera");
    
    var tdCabFav = document.createElement("td");
    tdCabFav.setAttribute("class", "fav");
    
    var tdCabCanc = document.createElement("td");
    tdCabCanc.innerHTML = 'Canción';
    var tdCabArt = document.createElement("td");
    tdCabArt.innerHTML = 'Artista';
    var tdCabAlb = document.createElement("td");
    tdCabAlb.innerHTML = 'Álbum';
    var tdCabDurac = document.createElement("td");
    tdCabDurac.setAttribute("class", "durac");
    tdCabDurac.innerHTML = 'Duración';
    
    var tdCabAnade = document.createElement("td");
    tdCabAnade.setAttribute("class", "anade");

    var cCabBox = document.createElement("input");
    cCabBox.setAttribute("type", "checkbox");
    cCabBox.setAttribute("aria-label", "...");

    tdCabAnade.appendChild(cCabBox);
    
    trCab.appendChild(tdCabFav);
    trCab.appendChild(tdCabCanc);
    trCab.appendChild(tdCabArt);
    trCab.appendChild(tdCabAlb);
    trCab.appendChild(tdCabDurac);
    trCab.appendChild(tdCabAnade);
    
    contenCancion.append(trCab);
    
    for(var m=0;m<listaCanciones[idAlbum].length;m++){
//        console.log(listaCanciones[idAlbum][m].canc);
//        var contenCancion = document.getElementsByClassName("table")[0];
        
        var trFila = document.createElement("tr");
        trFila.setAttribute("id", "fila"+m);
        
        var tdFav = document.createElement("td");
        tdFav.setAttribute("class", "fav");
        
        var spGly = document.createElement("span");
        spGly.setAttribute("class", "glyphicon glyphicon-heart");
        spGly.setAttribute("aria-hidden", "true");
        
        tdFav.appendChild(spGly);
        
        var tdCanc = document.createElement("td");

        var aName = document.createElement("a");
        aName.setAttribute("class", "namePlay");
        aName.setAttribute("id", m);
        aName.innerHTML = listaCanciones[idAlbum][m].canc;
//        aName.appendChild(document.createTextNode("This is a paragraph"));
        tdCanc.appendChild(aName);
        
        var tdArti = document.createElement("td");
        tdArti.innerHTML = art[idAlbum];
        var tdAlb = document.createElement("td");
        tdAlb.innerHTML = alb[idAlbum];
        
        var tdDurac = document.createElement("td");
        tdDurac.setAttribute("class", "durac");
        tdDurac.innerHTML = listaCanciones[idAlbum][m].dura;
        
        var tdAnade = document.createElement("td");
        tdAnade.setAttribute("class", "anade");
        
        var cBox = document.createElement("input");
        cBox.setAttribute("type", "checkbox");
        cBox.setAttribute("aria-label", "...");

        tdAnade.appendChild(cBox);


        trFila.appendChild(tdFav);
        trFila.appendChild(tdCanc);
        trFila.appendChild(tdArti);
        trFila.appendChild(tdAlb);
        trFila.appendChild(tdDurac);
        trFila.appendChild(tdAnade);

        contenCancion.append(trFila);

    }
    
//    console.log("Canciones: "+listaCanciones[idAlbum][0].canc);
}