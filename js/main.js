/battle/

function battleCavalier() {
  document.getElementById("cavalier").className = "cavalier cavalier--animate";
  document.getElementById("dragon-battle").className = "dragon-battle dragon-battle--animate";
  document.getElementById("fire").className = "fire fire--animate";
  setTimeout(function d () { document.location.href='dead.html'} , 6000);
}
