let ogr1_ad = "Ada";
let ogr1_soyad = "Bilgi";
let ogr1_dogumTarixi =  "2010";
let ogr1_matematik1 = 80; 
let ogr1_matematik2= 70; 
let ogr1_matematik3 = 70; 

let ogr1_ortalama = (ogr1_matematik1 + ogr1_matematik2 + ogr1_matematik3) / 3


console.log(parseInt(ogr1_ortalama));
console.log(typeof ogr1_ortalama);

console.log(ogr1_ortalama >= 90); //false

let ogr2_ad = "Ada";
let ogr2_soyad = "Bilgi";
let ogr2_dogumTarixi =  "2010";
let ogr2_matematik1 = 41; 
let ogr2_matematik2= 43; 
let ogr2_matematik3 = 55; 

let ogr2_ortalama = (ogr2_matematik1 + ogr2_matematik1 + ogr2_matematik1) / 3
console.log(parseFloat(ogr2_ortalama));
console.log(typeof ogr2_ortalama);
console.log(ogr2_ortalama >= 40); //true

let suankiYil = new Date().getFullYear();
 
let ogr1_yas = suankiYil - parseInt(ogr1_dogumTarixi);  

console.log(ogr1_yas);