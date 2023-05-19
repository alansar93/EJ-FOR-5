const OPCIONES = document.querySelector("#asd")
const SELECT = document.querySelector("select")
const INPUT_USUARIO = document.querySelector("input")

SELECT.innerHTML = "<option> SELECCIONE </option>"

function opcionesUsuarios() {
  let seleccionUsuario = INPUT_USUARIO.value
  SELECT.innerHTML = "<option> SELECCIONE </option>"

  for (let i = 0; i < seleccionUsuario; i++) {
    SELECT.innerHTML += "<option>" + "Opcion " + (i + 1) + "</option>"
  }
}