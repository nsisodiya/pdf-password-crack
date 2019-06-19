var shell = require("shelljs");
shell.echo("hello world");

function formatting(target) {
  return target < 10 ? "0" + target : target;
}
function GetFormattedDate(day) {
  var month = formatting(day.getMonth() + 1);
  var day = formatting(day.getDate());
  return day + "" + month;
}

function generatePasswords() {
  var s = Date.now();
  var pArr = [];
  for (var i = 0; i < 366; i++) {
    s = s + 24 * 60 * 60 * 1000;
    var p = "LALK" + GetFormattedDate(new Date(s));
    pArr.push(p);
  }
  pArr.push("LALK2902");
  return pArr;
}
generatePasswords();
function generateNewPasswords() {
  var pArr = [];
  for (var i = 0; i <= 99; i++) {
    var p = `NARE${formatting(i)}57`;
    console.log(p);
    pArr.push(p);
  }
  return pArr;
}
//generateNewPasswords();
function work(params) {
  var pArr = generatePasswords();
  pArr.forEach(function(v, i) {
    console.log("Tring password", v);
    if (shell.exec(`pdftotext -upw ${v} card.pdf o.txt`).code !== 0) {
    } else {
      console.log("===============> Working password", v);
    }
  });
}
work();
console.log("Done");
