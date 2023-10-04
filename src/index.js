 "use strict"

$(document).ready(function() {
  $('#search-form').submit(function (e) {
    e.preventDefault() // Evita que el formulario se envíe automáticamente

    var brand = $('input[name="brand"]').val()
    var model = $('input[name="model"]').val()
    var color = $('input[name="color"]').val()

    if (brand === "" || model === "" || color === "") {
      alert("Los campos Marca, Modelo y Color son obligatorios.")
    } else {
      alert("El formulario fue enviado correctamente")
      this.submit();
    }
  })
})