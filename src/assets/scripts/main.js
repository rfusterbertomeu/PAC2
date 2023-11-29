/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import * as bootstrap from 'bootstrap'
/**
 * Write any other JavaScript below
 */
const enllac_header = document.getElementsByClassName("header__enllac");
const enllac_portada = document.getElementsByClassName("portada__enllac");
const enllac_footer = document.getElementsByClassName("footer__enllac--menu");

Array.from(enllac_header).forEach(function (enllac) {
  enllac.addEventListener('click', function () {
    const target = enllac.getAttribute('data-target');
    mostra(target);
  });
});
Array.from(enllac_portada).forEach(function (enllac) {
  enllac.addEventListener('click', function () {
    const target = enllac.getAttribute('data-target');
    mostra(target);
  });
});
Array.from(enllac_footer).forEach(function (enllac) {
  enllac.addEventListener('click', function () {
    const target = enllac.getAttribute('data-target');
    mostra(target);
  });
});

function mostra(id) {
  document.querySelectorAll('.pagina').forEach(function (pagina) {
    pagina.style.display = 'none';
  });

  document.getElementById(id).style.display = 'flex';
  document.getElementById(id).style.flexDirection = 'column';
  document.getElementById(id).style.alignItems = 'center'

}