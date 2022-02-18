let lastIn = null;

function switchBox(n) {
  const in_e = document.getElementById("in");
  const out_e = document.getElementById("out");
  if (lastIn) {
    out_e.className = `btn${lastIn}-out`;
  }

  lastIn = n;
  in_e.className = `btn${n}-in`;
}