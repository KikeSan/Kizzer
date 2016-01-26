$(document).ready(function() {
    
    $( ".wrapper" ).css( 'height',$( window ).height() );
    $( ".cuerpo" ).css( 'width',$( window ).width()-220 );
    
    
    $( ".infoAlbum" ).css( 'width',$( ".cuerpo" ).width()-290 );
    
    

});
$( window ).resize(function() {
    $( ".wrapper" ).css( 'height',$( window ).height() );
    $( ".cuerpo" ).css( 'width',$( window ).width()-220 );
    
    $( ".infoAlbum" ).css( 'width',$( ".cuerpo" ).width()-290 );
});