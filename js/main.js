window.addEventListener ("load", function(){
  var select = document.getElementById("select");

  select.addEventListener("change", function(e){
    e.preventDefault();
    var codersChile = document.getElementsByClassName("coders-chile");
    var codersLima5 = document.getElementsByClassName("coders-lima5");
    var codersLima6 = document.getElementsByClassName("coders-lima6");

    if(select.value == "chile"){
      mostrar(codersChile);
      oculta(codersLima5);
      oculta(codersLima6);
    } else if (select.value == "5-lima") {
      oculta(codersChile);
      mostrar(codersLima5);
      oculta(codersLima6);
    }else if (select.value == "6-lima") {
      oculta(codersChile);
      oculta(codersLima5);
      mostrar(codersLima6);
    }else if (select.value == "todas") {
      mostrar(codersChile);
      mostrar(codersLima5);
      mostrar(codersLima6);
    }
  })

  function mostrar(coders){
    for (var i = 0; i < coders.length; i++){
      coders[i].style.display = "inline-block";
    }
  }

  function oculta(coders){
    for (var i = 0; i < coders.length; i++) {
      coders[i].style.display = "none";
    }
  }

})

// function addCoders(cantidad){
//   var codersTodas = document.getElementById("coders-todas");
//   for(var i=0; i<cantidad; i++){
//     var img = document.createElement("img");
//     codersTodas.appenChild(img);
//   }
