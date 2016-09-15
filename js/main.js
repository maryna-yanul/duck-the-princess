/battle/

function battleCavalier() {
  document.getElementById("cavalier").className = "cavalier cavalier--animate";
  document.getElementById("dragon-battle").className = "dragon-battle dragon-battle--animate";
  document.getElementById("fire").className = "fire fire--animate";
  localStorage.setItem('hero2', 'true');
  setTimeout(function() { document.location.href='dead.html'} , 6000);
}

function battleUnicorn() {
  document.getElementById("dragon-battle").className = "dragon-battle dragon-battle--animate";
  document.getElementById("fire").className = "fire fire--animate";
  document.getElementById("unicorn-hero").className = "unicorn-hero unicorn-hero--animate";
  document.getElementById("rainbow").className = "rainbow--animate";
  localStorage.setItem('hero3', 'true');
  setTimeout(function() { document.location.href='dead.html'} , 6000);
}

function battleDuck() {
  document.getElementById("dragon-battle").className = "dragon-battle dragon-battle--animate";
  setTimeout(function() { document.getElementById("weapons").className = "weapons--animate" } , 3500);
  setTimeout(function() { document.getElementById("shot").className = "shot--animate" } , 4000);
  setTimeout(function() { document.getElementById("glasses").className = "glasses--animate" } , 5000);
  setTimeout(function() { document.location.href='finish.html'} , 8000);
}
