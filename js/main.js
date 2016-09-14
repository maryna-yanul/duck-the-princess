/battle/

function battleCavalier() {
  document.getElementById("cavalier").className = "cavalier cavalier--animate";
  document.getElementById("dragon-battle").className = "dragon-battle dragon-battle--animate";
  document.getElementById("fire").className = "fire fire--animate";
  setTimeout(function d () { document.location.href='dead.html'} , 6000);
}

function battleUnicorn() {
  document.getElementById("dragon-battle").className = "dragon-battle dragon-battle--animate";
  document.getElementById("fire").className = "fire fire--animate";
  document.getElementById("unicorn-hero").className = "unicorn-hero unicorn-hero--animate";
  document.getElementById("rainbow").className = "rainbow--animate";
  setTimeout(function d () { document.location.href='dead.html'} , 6000);
}
