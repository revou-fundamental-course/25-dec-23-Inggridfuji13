function luas(){
  var nilai_alas = parseInt(document.form_large.input_alas.value);
  var nilai_tinggi = parseInt(document.form_large.input_tinggi.value);

  document.form_large.rumus_luas.value = "L = 1/2 x a x t";
  document.form_large.masukan_nilai_luas.value = "L = 1/2 x " + nilai_alas + " x " + nilai_tinggi;

  var hasil_luas = ( 0.5 * nilai_alas * nilai_tinggi);
  document.form_large.hasil_luas.value = "L = " + hasil_luas;
  
}


function keliling(){
  var nilai_s1 = parseInt(document.form_around.input_sisi1.value);
  var nilai_s2 = parseInt(document.form_around.input_sisi2.value);
  var nilai_s3 = parseInt(document.form_around.input_sisi3.value);

  document.form_around.rumus_kel.value = "K = S1 x S2 x S3";
  document.form_around.masukan_nilai_kel.value = "K = " + nilai_s1 + " x " + nilai_s2 + " x " + nilai_s3;
  
  var hasil_kel = (nilai_s1 * nilai_s2 * nilai_s3);
  document.form_around.hasil_kel.value = "K = " + hasil_kel;
}
