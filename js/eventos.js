var val = 0; //valor falso
$('.boton').on('click', function(e) {
  if(val==0){
    console.log("Menu posicion variable");
    $('#menu').addClass('sticky-top');
    //code para cambiar los iconos
    $('#fa-icono').addClass('fa-bars');
    $('#fa-icono').removeClass('fa-thumb-tack');

  val=1;//valor verdadero
}else{
  console.log("Menu posicion inicial");
  $('#menu').removeClass('sticky-top');
    //code para cambiar los iconos
    $('#fa-icono').removeClass('fa-bars');
    $('#fa-icono').addClass('fa-thumb-tack');
      val=0;//valor falso
    }
  });

//codigo para canvuar los valores en diferentes etiquetas
// $("#id o .clase").attr("type o href o src o class", "text");
