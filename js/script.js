function luas(){
  var nilai_alas = document.getElementById("input-alas").value;
  var nilai_tinggi = document.getElementById("input-tinggi").value;

  document.getElementById("rumus-luas").value = "L = 1/2 x a x t";
  document.getElementById("masukan-nilai").value = ("L = 1/2 x " + nilai_alas + " x " + nilai_tinggi);
  
  var hasil_luas = ( 0.5 * nilai_alas * nilai_tinggi);
  document.getElementById("hasil-luas").value = "L = " + hasil_luas;
  
}