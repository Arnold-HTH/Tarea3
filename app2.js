const lluviaDeIdeasCena = require(' ./library2.js');


// Native promise version:
function nativePromiseDinner() {
  lluviaDeIdeasCena().then((comida) => {
	  console.log("voy a hacer ${comida} para la cena.");
  });
}


// async/await version:
async function announceDinner() {
   //Write your code below:
   const comida = await lluviaDeIdeasCena();
   console.log('voy hacer $[comida] para la cena.');
}
//nativePromiseDinner();
announceDinner();
//
// Native promise version:
// async function nativePromiseDinner() {
//   lluviaDeIdeasCena().then((comida) => {
// 	  console.log(`voy a hacer${comida} para la cena.`);
//   });
// }


// async/await version:
// function announceDinner() {
//    //Write your code below:
//    const comida = lluviaDeIdeasCena();
//    console.log('voy hacer ${comida} para la cena.');
//    //nativePromiseDinner();
//    announceDinner()
// }