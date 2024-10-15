document.getElementById("btn").addEventListener("click", madLib);

function madLib() {
  let adjective1 = prompt("Adjective: ");
  let noun = prompt("Noun: ");
  let verb = prompt("Verb: ");
  let adjective2 = prompt("Adjective: ");
  let Pnoun = prompt("Plural noun: ");

  let msg = `The ${adjective1} ${noun} is known to be able to ${verb} extremely quickly, even faster than ${adjective2} ${Pnoun}.
  `;

  alert(msg);
}
