// let ism = prompt("ismingizni kiriting");
// let familyasi = prompt("familiyangiz kiriting");
// let yosh = prompt("yoshngiz kiriting");
// alert(
//     `Sizning malumotlaringiz: Ism: ${ism} Familiya:${familyasi} Yosh:${yosh}`
// );

// let son= Math.floor(Math.random() * 10) + 1;
// let input = prompt("Son o`yladim. [1,12]. Topib ko`ring.");
// console.log(
//     `Men ${son} sonini o'ylagan edim, Siz ${input} sonini kiritdingiz`
// // )
// let son = Math.floor(Math.random() * 10) + 1;
// console.log(son);
// let input = +prompt("Son oyladim.[1,12]. Topib koring.");
// if (son === input) {
//     document.write("Tori");
// }
// else if (input > son) {
//     document.write("Siz katta son kiritdingiz");
// }
// else if (input < son) {
//   document.write("Siz kichkina son kiritdingiz");

// }
// else {
//     document.write("Iltimos son kiriting");
// }

let menu = +prompt("Chetelga chiqaman deb jamg'arib qo'ygan summangizni kiriting (UZSda)");
console.log(menu);
let ticket = 350 * 11250;
let living = 350 * 11250;
let tour = 230 * 12864;    
console.log("Chipta narxi (borib kelish):" + ticket);
console.log("Yotoqjoy va  milliy taomlar:" + living);
console.log("Sayohat qilish:" + tour);
let index = ticket + living + tour;
console.log("Barcha xarajatlaringiz:" + index);
let input = index - menu;
document.write("Yetmayotgan summangiz:" +input);
let day = Math.floor(Math.random() * (30 - 3 + 1) + 3);
document.write(day);
if (menu > index) {
  alert("Biz bilan hamkorlik qilganingizdan xursandmiz");
} else if (menu === 0) {
  alert("Iltimos summangizni kiriting");
} else if (menu < index) {
  alert(
    `Sizda hozircha mablag' mavjud emas.To'ldirishi zarur bolgan summa: ${input} so'm. Iltimos ${day}kundan keyin qayta keling! `
  );
}
else alert("Iltimos summa kiriting");