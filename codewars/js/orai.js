/*
Gaunamas savaites krituliu kiekis milimetrais.
Jei visa savaite visiskai nelyjo, graziname: "Sausra";
Jei krituliu ne daugiau nei 50mm, tai: "Ganetinai sausa savaite";
Jei krituliu kiekis ne daugiau 200mm, tai: "Lietinga savaite"
Jei krituliu virs 1000mm, tai: "Barsukas turetu sedeti namie"
Visais kitais atvejais: "Labai daug lietaus"
*/

const a = [0, 0, 0, 0, 0, 0, 0];
const b = [0, 0, 10, 5, 7, 0, 0];
const c = [50, 0, 10, 5, 7, 40, 15];
const d = [100, 200, 300, 400, 500, 600, 700];
const e = [100, 100, 100, 100, 100, 100, 100];

function krituliuKiekis(list) {
    let savaitesKrituliai = 0;
    for (let i = 0; i < list.length; i++) {
         const element = list [i];
         savaitesKrituliai  += element;
     
    }
    if (krituliuKiekis === 0) {
        return 'Sausra';
    }

    if (savaitesKrituliai <= 50){
        return 'Ganetinai sausa savaite';
    }
    if (savaitesKrituliai <= 200){
        return 'Lietinga savaite';
    }
    if (savaitesKrituliai > 1000){
        return 'Barsukas turetu sedeti namie';
    }
    else 'Labai daug lietaus';
     
 }

const xa =krituliuKiekis(a);
const xb =krituliuKiekis(b);
const xc =krituliuKiekis(c);
const xd =krituliuKiekis(d);
const xe =krituliuKiekis(e);


console.log(xa);
console.log(xb);
console.log(xc);
console.log(xd);
console.log(xe);