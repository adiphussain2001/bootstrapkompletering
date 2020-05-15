function rabattNamn () {  //Nu skapar jag en funtion
  const rabattPris = ["30 % ", "20%", "15%"]; //Nu skapar jag mina arrays för rabbat % och namnger dem till rabattPris
  const rabattNamn = ["10TEKS", "10BES", "17USS"]; //Nu skapar jag mina arrays för rabattnamnen

  var slumpNr = Math.floor(Math.random() * 3); //NU slumpar jag rabattnamnen och rabattPris

  alert(rabattPris[slumpNr] + ", " + rabattNamn[slumpNr]); //Nu skapar jag en alert popup som kommer att visa det slumpade rabatkoden
}
