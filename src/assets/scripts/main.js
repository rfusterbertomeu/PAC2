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
const enllac = document.querySelector(".nav-link");

enllac.addEventListener("click", function() {
  const target = enllac.getAttribute('data-target');
  mostra(target);
});

function mostra(id) {
  document.querySelectorAll('.pagina').forEach(function(pagina) {
    pagina.style.display = 'none';
  });

  document.getElementById(id).style.display = 'block';
}